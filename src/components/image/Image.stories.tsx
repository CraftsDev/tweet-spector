import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from '.';

export default {
  title: 'Image',
  component: Image
} as Meta;

const Template: Story<ImageProps> = (args) => (
  <Image {...args} src={process.env.REACT_APP_AUSTIN_IMAGE || ''} />
);

export const image = Template.bind({});
image.args = {
  isCircular: false
};

export const imageCircular = Template.bind({});
imageCircular.args = {
  isCircular: true
};

const Template2: Story<ImageProps> = (args) => (
  <Image
    {...args}
    src='https://media-exp1.licdn.com/dms/image/C4E03AQGn72OpkOm6zQ/profile-displayphoto-shrink_800_800/0/1529044523148?e=1626307200&v=beta&t=kCJKIYreKp4ufjo6BHUaJfPzcLC3namggb14JchdsIc'
    height={100}
    width={100}
    alt='Some Alt Text'
  />
);

export const imageCircular100 = Template2.bind({});
imageCircular100.args = {
  isCircular: true
};
