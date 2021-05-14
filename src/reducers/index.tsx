import { Statuses } from '../services/api/Twitter';
import { HashTag } from '../services/api/Twitter/TwitterResponseObjects';
import AppReducer from './AppReducer';

export const initialState = {
  q: '',
  hashTags: [] as HashTag[],
  statuses: [] as Statuses,
  displayStatuses: [] as Statuses,
  nextResults: '',
  maxId: '',
  end: false,
  hashTagFilters: [] as HashTag[],
};

export type QueryStringState = typeof initialState;

export enum TweetAppActionTypes {
  Update = 'UPDATE_QUERY_STRING',
  UpdateTweets = 'UPDATE_TWEETS',
  LoadMoreTweets = 'LOAD_MORE_TWEETS',
  EndOfTweetList = 'END_OF_TWEET_LIST',
  ToggleHashTagFilter = 'TOGGLE_HASH_TAG_FILTER',
}

export type UpdateQueryStringPayload = {
  q: string;
};
export type UpdateQueryStringAction = {
  type: TweetAppActionTypes;
  payload: UpdateQueryStringPayload;
};

export type UpdateTweetsPayload = {
  statuses: Statuses;
  nextResults: string;
  hashTags: HashTag[];
};
export type UpdateTweetsAction = {
  type: TweetAppActionTypes;
  payload: UpdateTweetsPayload;
};

export type LoadMoreTweetsPayload = {
  maxId: string;
};
export type LoadMoreTweetsAction = {
  type: TweetAppActionTypes;
  payload: LoadMoreTweetsPayload;
};

export type EndOfTweetListAction = {
  type: TweetAppActionTypes;
  payload: {};
};

export type ToggleHashTagFilterPayload = {
  hashTag: HashTag;
};

export type SetHashTagFilterAction = {
  type: TweetAppActionTypes;
  payload: ToggleHashTagFilterPayload;
};

export type AppActions =
  | UpdateQueryStringAction
  | UpdateTweetsAction
  | LoadMoreTweetsAction
  | EndOfTweetListAction
  | SetHashTagFilterAction;

export default AppReducer;
