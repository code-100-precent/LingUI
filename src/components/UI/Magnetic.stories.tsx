import type { Meta, StoryObj } from '@storybook/react'
import { Magnetic } from './Magnetic'
import Button from './Button'

const meta: Meta<typeof Magnetic> = {
  title: 'UI/Magnetic',
  component: Magnetic,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Magnetic>

export const Default: Story = {
  render: () => (
    <Magnetic>
      <Button>Magnetic Button</Button>
    </Magnetic>
  )
}

export const StrongMagnetic: Story = {
  render: () => (
    <Magnetic strength={0.5}>
      <Button>Strong Magnetic</Button>
    </Magnetic>
  )
}

export const WeakMagnetic: Story = {
  render: () => (
    <Magnetic strength={0.1}>
      <Button>Weak Magnetic</Button>
    </Magnetic>
  )
}

export const OnCard: Story = {
  render: () => (
    <Magnetic>
      <div className="w-64 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        Magnetic Card
      </div>
    </Magnetic>
  )
}

