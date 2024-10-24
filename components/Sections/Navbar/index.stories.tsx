import Navbar from '~/components/Sections/Navbar';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Navbar>;
type Meta = MetaObj<typeof Navbar>;

export const Default: Story = {};

export const WithActiveLink: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/docs',
      },
    },
  },
};

export default { component: Navbar } as Meta;
