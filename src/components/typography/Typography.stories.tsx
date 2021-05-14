import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography, { TypographyProps } from './index';
import variables from '../../shared/variables';

export default {
  title: 'Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>Tweet Feed</Typography>
);

export const h1 = Template.bind({});
h1.args = {
  TagType: 'h1',
  color: variables.ThemeColors.header.color,
};

export const h2 = Template.bind({});
h2.args = {
  TagType: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
  TagType: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
  TagType: 'h4',
};

export const h5 = Template.bind({});
h5.args = {
  TagType: 'h5',
};

export const h1Override = Template.bind({});
h1Override.args = {
  TagType: 'h5',
  fontSize: 44,
};
