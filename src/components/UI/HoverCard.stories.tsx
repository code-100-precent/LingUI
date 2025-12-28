import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard } from './HoverCard'
import Card from './Card'

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <Card>
        <div className="p-8 text-center">
          <p>Hover over this card</p>
        </div>
      </Card>
    </HoverCard>
  )
}

export const LowIntensity: Story = {
  render: () => (
    <HoverCard intensity="low">
      <Card>
        <div className="p-8 text-center">Low intensity hover</div>
      </Card>
    </HoverCard>
  )
}

export const MediumIntensity: Story = {
  render: () => (
    <HoverCard intensity="medium">
      <Card>
        <div className="p-8 text-center">Medium intensity hover</div>
      </Card>
    </HoverCard>
  )
}

export const HighIntensity: Story = {
  render: () => (
    <HoverCard intensity="high">
      <Card>
        <div className="p-8 text-center">High intensity hover</div>
      </Card>
    </HoverCard>
  )
}

