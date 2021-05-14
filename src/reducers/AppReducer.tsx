import {
  AppActions,
  LoadMoreTweetsPayload,
  TweetAppActionTypes,
  QueryStringState,
  UpdateQueryStringPayload,
  UpdateTweetsPayload,
  ToggleHashTagFilterPayload,
} from '.';
import { Tweet } from '../services/api/Twitter';
import { HashTag } from '../services/api/Twitter/TwitterResponseObjects';

const avoidDupes = <T,>(originalArray: T[], newArray: T[]) =>
  Array.from(new Set([...originalArray, ...newArray].values()));

const AppReducer = (state: QueryStringState, action: AppActions) => {
  const { type, payload } = action;
  switch (type) {
    case TweetAppActionTypes.Update:
      const queryStringPayload = payload as UpdateQueryStringPayload;
      return {
        ...state,
        q: queryStringPayload.q,
        statuses: [],
        displayStatuses: [],
        hashTagFilters: [],
        hashTags: [],
        end: false,
        maxId: '',
      };
    case TweetAppActionTypes.UpdateTweets:
      const tweetPayload = payload as UpdateTweetsPayload;
      return {
        ...state,
        nextResults: tweetPayload.nextResults,
        statuses: avoidDupes<Tweet>(state.statuses, tweetPayload.statuses),
        displayStatuses: avoidDupes<Tweet>(
          state.statuses,
          tweetPayload.statuses
        ),
        hashTags: avoidDupes<HashTag>(state.hashTags, tweetPayload.hashTags),
      };
    case TweetAppActionTypes.LoadMoreTweets:
      const loadMorePayload = payload as LoadMoreTweetsPayload;
      return {
        ...state,
        maxId: loadMorePayload.maxId,
      };
    case TweetAppActionTypes.EndOfTweetList:
      return { ...state, end: true };
    case TweetAppActionTypes.ToggleHashTagFilter:
      const pl = payload as ToggleHashTagFilterPayload;

      const hasSelectedFilter = state.hashTagFilters.filter(
        (tag) => tag.text === pl.hashTag.text
      )[0];

      const hashTagFilters = hasSelectedFilter
        ? state.hashTagFilters.filter((tweet) => tweet.text !== pl.hashTag.text) // remove
        : [...state.hashTagFilters, pl.hashTag]; // add

      const displayStatuses =
        hashTagFilters.length > 0
          ? state.statuses.filter((tweet) => {
              const hashTagsTextArray = tweet.entities?.hashtags?.map(
                (tag) => tag.text
              );
              return hashTagsTextArray?.some((text) =>
                hashTagFilters.map((tag) => tag.text).includes(text)
              );
            })
          : state.statuses;
      return { ...state, hashTagFilters, displayStatuses };
    default:
      return state;
  }
};

export default AppReducer;
