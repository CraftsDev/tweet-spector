export interface GetTweetParams {
  q: string;
  count?: number;
  result_type?: string;
  max_id?: string;
  include_entities?: number;
}
