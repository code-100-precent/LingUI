import type { Meta, StoryObj } from '@storybook/react'
import Timeline from './Timeline'
import { CheckCircle, Clock, Circle } from 'lucide-react'

const meta: Meta<typeof Timeline> = {
  title: 'Data/Timeline',
  component: Timeline,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Timeline>

const sampleItems = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been placed successfully',
    time: '2024-01-01 10:00',
    status: 'completed' as const,
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    id: '2',
    title: 'Processing',
    description: 'Your order is being processed',
    time: '2024-01-01 11:00',
    status: 'completed' as const,
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    id: '3',
    title: 'Shipped',
    description: 'Your order has been shipped',
    time: '2024-01-02 14:00',
    status: 'current' as const,
    icon: <Clock className="w-5 h-5" />
  },
  {
    id: '4',
    title: 'Delivered',
    description: 'Your order will be delivered soon',
    time: '2024-01-03 16:00',
    status: 'upcoming' as const,
    icon: <Circle className="w-5 h-5" />
  },
]

export const Default: Story = {
  args: {
    items: sampleItems
  }
}

export const Vertical: Story = {
  args: {
    items: sampleItems,
    orientation: 'vertical'
  }
}

export const Horizontal: Story = {
  args: {
    items: sampleItems,
    orientation: 'horizontal'
  }
}

export const WithoutIcons: Story = {
  args: {
    items: sampleItems.map(({ icon, ...item }) => item)
  }
}

export const CustomColors: Story = {
  args: {
    items: [
      { ...sampleItems[0], color: 'blue' },
      { ...sampleItems[1], color: 'green' },
      { ...sampleItems[2], color: 'yellow' },
      { ...sampleItems[3], color: 'gray' },
    ]
  }
}

