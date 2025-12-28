import type { Meta, StoryObj } from '@storybook/react'
import ProgressBar from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Data/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error']
    }
  }
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 50
  }
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={50} size="sm" />
      <ProgressBar value={50} size="md" />
      <ProgressBar value={50} size="lg" />
    </div>
  )
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={50} variant="default" />
      <ProgressBar value={50} variant="success" />
      <ProgressBar value={50} variant="warning" />
      <ProgressBar value={50} variant="error" />
    </div>
  )
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={75} label="Progress" />
      <ProgressBar value={50} label="Upload" description="Uploading files..." />
    </div>
  )
}

export const WithoutValue: Story = {
  render: () => (
    <div className="w-64">
      <ProgressBar value={60} showValue={false} />
    </div>
  )
}

export const DifferentValues: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={0} />
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  )
}

export const CustomMax: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={150} max={200} label="150 / 200" />
      <ProgressBar value={75} max={100} label="75 / 100" />
    </div>
  )
}

