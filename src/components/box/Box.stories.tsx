import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from '../typography';
import ChipContainer from '../chip/ChipContainer';
import { Chip } from '../chip';
import Box, { BoxProps } from '.';
import variables from '../../shared/variables';
import { HashTag } from '../../services/api/Twitter/TwitterResponseObjects';

export default {
  title: 'Box',
  component: Box,
} as Meta;

const Template: Story<PropsWithChildren<BoxProps>> = (args) => (
  <Box {...args}>Hello World</Box>
);
export const box = Template.bind({});

const Template2: Story<PropsWithChildren<BoxProps>> = (args) => (
  <Box {...args}>
    <Typography>Filter by hashtag</Typography>
    <ChipContainer>
      <Chip hashTag={{ text: '#coding', indices: [4] } as HashTag} />
      <Chip hashTag={{ text: '#Python', indices: [2] } as HashTag} />
      <Chip hashTag={{ text: '#ComputerScience', indices: [1] } as HashTag} />
    </ChipContainer>
  </Box>
);
export const boxWithChips = Template2.bind({});

const Template3: Story<PropsWithChildren<BoxProps>> = (args) => (
  <Box {...args}>More Controlled Box.</Box>
);

export const boxOverrides = Template3.bind({});
boxOverrides.args = {
  backgroundColor: variables.ThemeColors.tweetListItem.oddBackgroundColor,
  boxRadius: '0',
  shadow: false,
  padding: '0',
};
