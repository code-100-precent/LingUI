import type { Meta, StoryObj } from '@storybook/react'
import { Pulse } from './Pulse'
import Button from './Button'

const meta: Meta<typeof Pulse> = {
  title: 'UI/Pulse',
  component: Pulse,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pulse>

export const Default: Story = {
  render: () => (
    <Pulse>
      <Button>Pulsing Button</Button>
    </Pulse>
  )
}

export const LowIntensity: Story = {
  render: () => (
    <Pulse intensity="low">
      <Button>Low Pulse</Button>
    </Pulse>
  )
}

export const HighIntensity: Story = {
  render: () => (
    <Pulse intensity="high">
      <Button>High Pulse</Button>
    </Pulse>
  )
}

export const CustomDuration: Story = {
  render: () => (
    <Pulse duration={1}>
      <Button>Fast Pulse</Button>
    </Pulse>
  )
}

export const OnCard: Story = {
  render: () => (
    <Pulse>
      <div className="w-64 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">
        Pulsing Card
      </div>
    </Pulse>
  )
}

