import type { Meta, StoryObj } from '@storybook/react'
import StatCard from './StatCard'
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react'

const meta: Meta<typeof StatCard> = {
  title: 'Data/StatCard',
  component: StatCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatCard>

export const Default: Story = {
  args: {
    title: 'Total Users',
    value: '1,234'
  }
}

export const WithIcon: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    icon: Users
  }
}

export const WithChange: Story = {
  args: {
    title: 'Revenue',
    value: '$12,345',
    change: {
      value: 12.5,
      type: 'increase'
    },
    icon: DollarSign
  }
}

export const AllChangeTypes: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <StatCard
        title="Revenue"
        value="$12,345"
        change={{ value: 12.5, type: 'increase' }}
        icon={TrendingUp}
      />
      <StatCard
        title="Users"
        value="1,234"
        change={{ value: 5.2, type: 'decrease' }}
        icon={Users}
      />
      <StatCard
        title="Activity"
        value="456"
        change={{ value: 0, type: 'neutral' }}
        icon={Activity}
      />
    </div>
  )
}

export const WithDescription: Story = {
  args: {
    title: 'Total Revenue',
    value: '$12,345',
    description: 'Last 30 days',
    change: {
      value: 12.5,
      type: 'increase'
    },
    icon: DollarSign
  }
}

export const Clickable: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    icon: Users,
    onClick: () => alert('Card clicked!')
  }
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Users"
        value="1,234"
        change={{ value: 12.5, type: 'increase' }}
        icon={Users}
      />
      <StatCard
        title="Revenue"
        value="$12,345"
        change={{ value: 5.2, type: 'increase' }}
        icon={DollarSign}
      />
      <StatCard
        title="Active"
        value="456"
        change={{ value: 3.1, type: 'decrease' }}
        icon={Activity}
      />
      <StatCard
        title="Growth"
        value="23.5%"
        change={{ value: 0, type: 'neutral' }}
        icon={TrendingUp}
      />
    </div>
  )
}

