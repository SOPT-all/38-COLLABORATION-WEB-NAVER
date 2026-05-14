import type {Meta, StoryObj} from '@storybook/react-vite';

import {AgreementSection} from '@/pages/order-sheet/sections/agreement-section/AgreementSection';

const meta = {
  title: 'OrderSheet/Sections/AgreementSection',
  component: AgreementSection,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[343px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AgreementSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
