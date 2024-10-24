import Sidebar from '~/components/Common/Sidebar';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Sidebar>;

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Discover',
        link: '/discover',
      },
      {
        label: "api",
        items: [
            {
                label: 'fetch',
                link: '/api/fetch',
            }, {
                label: 'user agent',
                link: '/api/user-agent',
            }, {
                label: 'proxy',
                link: '/api/proxy',
            }
        ]
      }
    ]
  },
};
