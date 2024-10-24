import Select from '~/components/Common/Select';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Select>;
type Meta = MetaObj<typeof Select>;

export const Default: Story = {
  args: {
    values: [
      'v1.x',
      'v2.x',
      'v3.x',
      'v4.x',
      'v5.x',
      'v6.x',
      'v7.x',
      'v8.x',
      'v9.x',
      'v10.x',
      'v11.x',
      'v12.x',
      'v13.x',
      'v14.x',
      'v15.x',
      'v16.x',
    ],
    defaultValue: 'v16.x',
    label: 'Select version',
  },
};

export default { component: Select } as Meta;
