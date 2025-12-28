import type { Meta, StoryObj } from '@storybook/react'
import { Typewriter } from './Typewriter'

const meta: Meta<typeof Typewriter> = {
  title: 'UI/Typewriter',
  component: Typewriter,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Typewriter>

export const Default: Story = {
  args: {
    text: 'Hello, World! This is a typewriter effect.'
  }
}

export const Fast: Story = {
  args: {
    text: 'This is a fast typewriter effect.',
    speed: 50
  }
}

export const Slow: Story = {
  args: {
    text: 'This is a slow typewriter effect.',
    speed: 200
  }
}

export const WithDelay: Story = {
  args: {
    text: 'This text appears after a delay.',
    delay: 1000
  }
}

export const LongText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}

