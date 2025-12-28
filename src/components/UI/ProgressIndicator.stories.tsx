import type { Meta, StoryObj } from '@storybook/react'
import { ProgressIndicator } from './ProgressIndicator'

const meta: Meta<typeof ProgressIndicator> = {
  title: 'UI/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProgressIndicator>

export const Default: Story = {
  args: {
    current: 3,
    total: 10
  }
}

export const Halfway: Story = {
  args: {
    current: 5,
    total: 10
  }
}

export const AlmostComplete: Story = {
  args: {
    current: 9,
    total: 10
  }
}

export const Complete: Story = {
  args: {
    current: 10,
    total: 10
  }
}

export const WithoutPercentage: Story = {
  args: {
    current: 3,
    total: 10,
    showPercentage: false
  }
}

export const WithoutAnimation: Story = {
  args: {
    current: 5,
    total: 10,
    animated: false
  }
}

