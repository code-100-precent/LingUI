import { Meta, StoryObj } from '@storybook/react'
import AudioController from './AudioController'

const meta: Meta<typeof AudioController> = {
  title: 'UI/AudioController',
  component: AudioController,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AudioController>

export const Default: Story = {
  args: {}
}

export const TopRight: Story = {
  args: {
    position: 'top-right'
  }
}

export const TopLeft: Story = {
  args: {
    position: 'top-left'
  }
}

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left'
  }
}

