import { FC, useContext } from 'react';
import styled from 'styled-components';
import { TweetAppActionTypes } from '../../reducers';
import { getSize } from '../../services/screen/ScreenService';
import variables from '../../shared/variables';
import { AppStoreDispatchContext, AppStoreStateContext } from '../app/App';
import Box from '../box';
import HashTagCollection from '../HashTagCollection';
import Search from '../search';
import { TweetList } from '../tweetList';

const MarginDiv = styled.div`
  max-width: 100%;
`;

const FlexGrowDiv = styled.div`
  margin: ${variables.Margin};
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

interface SearchTweetProps {
  isMobile: boolean;
}
const SearchTweets: FC<SearchTweetProps> = ({ isMobile }) => {
  const state = useContext(AppStoreStateContext);
  const dispatch = useContext(AppStoreDispatchContext);

  const handleSearchChange = (searchString: string) => {
    dispatch({
      type: TweetAppActionTypes.Update,
      payload: { q: searchString },
    });
  };

  const handleLoadMore = () => {
    const params = new URLSearchParams(state.nextResults);
    const maxId = params.get('max_id');
    if (maxId)
      dispatch({
        type: TweetAppActionTypes.LoadMoreTweets,
        payload: { maxId },
      });
  };

  return (
    <Box
      flexDirection={'row'}
      backgroundColor={'transparent'}
      padding={isMobile ? '0' : '0 20px 14px'}
      shadow={false}
      style={{
        width: getSize('1024px', isMobile),
        maxWidth: '100%',
      }}
    >
      <MarginDiv
        className='content-left'
        style={{
          maxWidth: getSize('650px', isMobile),
        }}
      >
        <Search
          placeholderText='Search by keyword'
          onChangeCallback={handleSearchChange}
        />
        {isMobile && <HashTagCollection />}
        <TweetList
          tweets={state.displayStatuses}
          loadMoreHandler={handleLoadMore}
        />
      </MarginDiv>
      {!isMobile && (
        <FlexGrowDiv>
          <HashTagCollection />
        </FlexGrowDiv>
      )}
    </Box>
  );
};

export default SearchTweets;
