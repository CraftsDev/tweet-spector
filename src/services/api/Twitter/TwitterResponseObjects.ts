export interface SearchMetadata {
  completed_in: number;
  max_id: number;
  max_id_str: string;
  next_results: string;
  query: string;
  count: number;
  since_id: number;
  since_id_str: string;
}

export interface MetaData {
  result_type: string;
  iso_language_code: string;
}

export interface User {
  id?: number;
  id_str?: string;
  name?: string;
  screen_name: string;
  location?: string;
  description?: string;
  url?: string;
  entities?: unknown;
  protected?: boolean;
  followers_count?: number;
  friends_count?: number;
  listed_count?: number;
  created_at?: string; // Date Time Server Side
  favorite_count?: number;
  utc_offest?: number;
  time_zone?: string;
  geo_enabled?: boolean;
  verified?: boolean;
  statuses_count?: number;
  lang?: string;
  contributors_enabled?: boolean;
  is_translator?: boolean;
  is_translation_enabled?: boolean;
  profile_background_color?: string;
  profile_background_image_url?: string;
  profile_background_image_url_https?: string;
  profile_background_tile?: string;
  profile_image_url?: string;
  profile_image_url_https?: string;
  profile_banner_url?: string;
  profile_link_color?: string;
  profile_sidebar_border_color?: string;
  profile_sidebar_fill_color?: string;
  profile_text_color?: string;
  profile_use_background_image?: string;
  has_extended_profile?: boolean;
  default_profile?: boolean;
  default_profile_image?: boolean;
  following?: boolean;
  follow_request_sent?: boolean;
  notifications?: unknown;
  translator_type?: string;
  withheld_in_countries?: unknown[];
}

export interface UserMention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface TweetURL {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Entity {
  hashtags?: HashTag[];
  symbols?: string[];
  user_mentions?: UserMention[];
  urls?: TweetURL[];
  // finish defining...
}

export interface HashTag {
  text: string;
  indices: number[];
}

export interface Tweet {
  created_at?: string; // Date Time Server Side
  id?: number;
  id_str: string;
  text: string;
  truncated?: boolean;
  entities?: Entity;
  extendedEntities?: unknown;
  metadata?: MetaData;
  src?: string;
  in_reply_to_status_id?: number;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id?: number;
  in_reply_to_user_id_str?: string;
  in_reply_to_screen_name?: string;
  user?: User;
  geo?: unknown;
  coordinates?: unknown;
  place?: unknown;
  contributors?: unknown;
  is_quote_status?: boolean;
  retweet_count?: number;
  favorite_count?: number;
  favorited?: boolean;
  retweeted?: boolean;
  possibly_sensitive?: boolean;
  lang?: string;
}

export type Statuses = Tweet[];

export interface GetTweetsResponse {
  statuses: Statuses;
  search_metadata: SearchMetadata;
}
