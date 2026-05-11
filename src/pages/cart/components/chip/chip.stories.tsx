import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import Chip from './chip';

const StatefulChip = () => {
  const [selectedTab, setSelectedTab] = useState<'normal' | 'kurly'>('normal');

  return <Chip selectedTab={selectedTab} onChange={setSelectedTab} />;
};

const meta = {
  title: 'Cart/Chip',
  component: StatefulChip,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StatefulChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
