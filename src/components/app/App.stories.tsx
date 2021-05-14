import { Meta, Story } from '@storybook/react';
import App from './App';

export default {
  title: 'App',
  component: App
} as Meta;

const AppTemplate: Story<{}> = () => <App />;
export const box = AppTemplate.bind({});
