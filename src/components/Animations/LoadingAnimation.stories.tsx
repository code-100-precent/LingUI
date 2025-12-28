import type { Meta, StoryObj } from '@storybook/react'
import LoadingAnimation from './LoadingAnimation'

const meta: Meta<typeof LoadingAnimation> = {
  title: 'Animations/LoadingAnimation',
  component: LoadingAnimation,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse', 'wave', 'bounce']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
}

export default meta
type Story = StoryObj<typeof LoadingAnimation>

export const Default: Story = {
  args: {
    type: 'spinner'
  }
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex items-center gap-4">
        <LoadingAnimation type="spinner" />
        <span>Spinner</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingAnimation type="dots" />
        <span>Dots</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingAnimation type="pulse" />
        <span>Pulse</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingAnimation type="wave" />
        <span>Wave</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingAnimation type="bounce" />
        <span>Bounce</span>
      </div>
    </div>
  )
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <LoadingAnimation type="spinner" size="sm" />
        <span className="text-sm">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoadingAnimation type="spinner" size="md" />
        <span className="text-sm">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoadingAnimation type="spinner" size="lg" />
        <span className="text-sm">Large</span>
      </div>
    </div>
  )
}

export const CustomColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <LoadingAnimation type="spinner" color="#ef4444" />
      <LoadingAnimation type="spinner" color="#10b981" />
      <LoadingAnimation type="spinner" color="#3b82f6" />
      <LoadingAnimation type="spinner" color="#f59e0b" />
    </div>
  )
}

