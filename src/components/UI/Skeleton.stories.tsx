import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    lines: 3
  }
}

export const SingleLine: Story = {
  args: {
    lines: 1
  }
}

export const MultipleLines: Story = {
  args: {
    lines: 5
  }
}

export const WithoutAnimation: Story = {
  args: {
    lines: 3,
    animated: false
  }
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-64 border rounded-lg p-4">
      <Skeleton lines={1} className="mb-4" />
      <Skeleton lines={3} />
    </div>
  )
}

