import { Story, Meta } from '@storybook/react';
import Search, { SearchProps } from './Search';

export default {
  title: 'Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const search = Template.bind({});
search.args = {
  placeholderText: 'Search by keyword',
};

export const searchAlertCallback = Template.bind({});
searchAlertCallback.args = {
  placeholderText: 'Search by keyword',
  onChangeCallback: (value: string) => alert(value),
  // onChangeCallback: (value: string) =>
  //   TWITTER_API_METHODS.getTweets({
  //     q: 'test',
  //     count: 5,
  //     result_type: 'popular',
  //   }),
};
