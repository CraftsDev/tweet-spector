import TwitterAPI from './TwitterAPI';
import { GetTweetParams } from './TwitterRequestObjects';
import {
  SearchMetadata,
  MetaData,
  User,
  Tweet,
  Statuses,
  GetTweetsResponse
} from './TwitterResponseObjects';

export type {
  GetTweetParams,
  SearchMetadata,
  MetaData,
  User,
  Tweet,
  Statuses,
  GetTweetsResponse
};

export { TwitterAPI };
