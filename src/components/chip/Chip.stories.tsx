import { PropsWithChildren } from 'react';
import { Story, Meta } from '@storybook/react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ChipContainer from './ChipContainer';
import { Chip, ChipProps } from '.';
import { HashTag } from '../../services/api/Twitter/TwitterResponseObjects';

export default {
  title: 'Chip',
  component: Chip
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const chip = Template.bind({});
chip.args = {
  hashTag: { text: '#Test Chip', indices: [2] } as HashTag
};

export const chipWithIcon = Template.bind({});
chipWithIcon.args = {
  hashTag: { text: '#Python', indices: [2] } as HashTag,
  ChipIcon: faGraduationCap
};

const ChipContainerTemplate: Story<PropsWithChildren<{}>> = (args) => (
  <ChipContainer {...args}>
    <Chip hashTag={{ text: '#coding', indices: [4] } as HashTag} />
    <Chip hashTag={{ text: '#Python', indices: [2] } as HashTag} />
    <Chip hashTag={{ text: '#ComputerScience', indices: [1] } as HashTag} />
  </ChipContainer>
);

export const chipContainer = ChipContainerTemplate.bind({});
