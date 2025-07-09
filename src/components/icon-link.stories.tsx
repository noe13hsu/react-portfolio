import type { Meta, StoryObj } from '@storybook/react'
import { TbBrandLeetcode } from 'react-icons/tb'


import { IconLink } from './icon-link'

const meta: Meta<typeof IconLink> = {
  title: 'Components/IconLink',
  component: IconLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconLink>;

export const Primary: Story = {
  args: {
    label: 'Leetcode',
    Icon: TbBrandLeetcode,
    to: 'https://leetcode.com/u/user3088m/',
  },
};
