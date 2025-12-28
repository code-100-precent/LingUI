import type { Meta, StoryObj } from '@storybook/react'
import { Ripple } from './Ripple'
import Button from './Button'

const meta: Meta<typeof Ripple> = {
  title: 'UI/Ripple',
  component: Ripple,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Ripple>

export const Default: Story = {
  render: () => (
    <Ripple>
      <Button>Click for Ripple</Button>
    </Ripple>
  )
}

export const CustomColor: Story = {
  render: () => (
    <Ripple color="rgba(59, 130, 246, 0.6)">
      <Button variant="primary">Blue Ripple</Button>
    </Ripple>
  )
}

export const OnCard: Story = {
  render: () => (
    <Ripple>
      <div className="w-64 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white cursor-pointer">
        Click for Ripple Effect
      </div>
    </Ripple>
  )
}

export const FastRipple: Story = {
  render: () => (
    <Ripple duration={300}>
      <Button>Fast Ripple</Button>
    </Ripple>
  )
}

