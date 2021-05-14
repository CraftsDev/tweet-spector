import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TweetAppActionTypes } from '../../reducers';
import { Tweet } from '../../services/api/Twitter';
import TWITTER_API_METHODS from '../../services/api/Twitter/TwitterAPI';
import variables, { COLORS } from '../../shared/variables';
import { AppStoreDispatchContext, AppStoreStateContext } from '../app/App';
import Box from '../box';
import TweetListItem from './TweetListItem';

export interface TweetListProps {
  tweets: Tweet[];
  loadMoreHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const StyledAnchor = styled.a`
  align-self: center;
  padding: 1em 1em 2.5em;
  color: ${COLORS.LINK_BLUE};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: ${COLORS.CHIP_CONTENT};
  }
`;

const TweetList = (props: TweetListProps) => {
  const { tweets, loadMoreHandler } = props;
  const { evenBackgroundColor, oddBackgroundColor } =
    variables.ThemeColors.tweetListItem;

  const appState = useContext(AppStoreStateContext);
  const dispatch = useContext(AppStoreDispatchContext);

  useEffect(() => {
    const queryRequestParams = {
      q: appState.q,
      result_type: 'popular',
      count: 5,
      max_id: appState.maxId
    };
    if (appState.q !== '')
      TWITTER_API_METHODS.getTweets(queryRequestParams).then(
        (response) => {
          // TODO implment loading
          const {
            statuses,
            search_metadata: { next_results }
          } = response.data;

          const hashTagsToAdd = response.data.statuses
            .filter((tweet) => tweet.entities?.hashtags?.length)
            .flatMap((tweet) => tweet.entities?.hashtags);

          if (statuses.length > 0) {
            dispatch({
              type: TweetAppActionTypes.UpdateTweets,
              payload: {
                statuses,
                nextResults: next_results,
                hashTags: hashTagsToAdd
              }
            });
          } else {
            dispatch({
              type: TweetAppActionTypes.EndOfTweetList,
              payload: {}
            });
          }
        },
        // TODO: dispatch failure here
        (error) => console.log(error)
      );
    return () => {
      // handle cancellation of request?
    };
  }, [appState.maxId, appState.q, dispatch]);

  return (
    <Box padding='0' className='tweet-list'>
      {tweets.length > 0 &&
        tweets.map((tweet, index) => {
          const borderRadius = index === 0 ? '4px 4px 0 0' : '';

          return (
            <TweetListItem
              borderRadius={borderRadius}
              key={`tweet-${tweet.id}-${index}`}
              tweet={tweet}
              backgroundColor={
                index % 2 === 0 ? evenBackgroundColor : oddBackgroundColor
              }
            />
          );
        })}
      {!appState.end && tweets.length > 0 && (
        <StyledAnchor onClick={loadMoreHandler}>Load more</StyledAnchor>
      )}
      {tweets.length === 0 && (
        <Box backgroundColor={'transparent'} shadow={false}>
          There are no tweets to display at this time. Please enter a different
          search query.
        </Box>
      )}
    </Box>
  );
};

export default TweetList;
