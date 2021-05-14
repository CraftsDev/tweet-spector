import axios, { AxiosResponse } from 'axios';
import { GetTweetParams } from './TwitterRequestObjects';
import { GetTweetsResponse } from './TwitterResponseObjects';

const BEARER_TOKEN = process.env.REACT_APP_TWITTER_BEARER_TOKEN;

const TwitterAPI = axios.create({
  baseURL: `http://localhost:8010/proxy`,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
});

const getTweets = async (requestParams: GetTweetParams) => {
  const { q, count, result_type, max_id } = requestParams;
  const params: GetTweetParams = {
    q,
    count,
    result_type,
    include_entities: 1
  };

  if (max_id) params.max_id = max_id;

  return await TwitterAPI.get<GetTweetParams, AxiosResponse<GetTweetsResponse>>(
    `1.1/search/tweets.json`,
    { params }
  );
};

const TWITTER_API_METHODS = {
  getTweets
};

export default TWITTER_API_METHODS;

// sample of how to make API request.
// const queryRequestParams = { q: '', result_type: '', count: 5, max_id: '' };
// TWITTER_API_METHODS.getTweets(queryRequestParams);
