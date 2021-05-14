import { Meta, Story } from '@storybook/react';
import { TweetList } from '.';
import { getFakeTweets } from './getFakeTweets';
import { TweetListProps } from './TweetList';
import TweetListItem, { TweetListItemProps } from './TweetListItem';

export default {
  title: 'Tweet List',
  component: TweetList,
} as Meta;

/* List Story */
const TweetListTemplate: Story<TweetListProps> = (args) => (
  <TweetList {...args} />
);

export const tweetList = TweetListTemplate.bind({});
tweetList.args = {
  tweets: getFakeTweets(),
};

/* List Item Story */
const TweetListItemTemplate: Story<TweetListItemProps> = (args) => (
  <TweetListItem {...args} />
);

export const tweetListItem = TweetListItemTemplate.bind({});
tweetListItem.args = {};
