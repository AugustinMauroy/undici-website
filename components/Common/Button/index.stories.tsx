import { ArrowBigDownIcon } from 'lucide-react';
import Button from '~/components/Common/Button';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;
type Meta = MetaObj<typeof Button>;

export const Default: Story = {
  args: {
    disabled: false,
    kind: 'solid',
    variant: 'primary',
    special: false,
  },
};

export default {
  component: Button,
  args: {
    children: (
      <>
        <ArrowBigDownIcon />
        Download
      </>
    ),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    kind: {
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    special: {
      control: 'boolean',
    },
  },
} as Meta;
