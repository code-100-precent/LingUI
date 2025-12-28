import type { Meta, StoryObj } from '@storybook/react'
import FadeIn from './FadeIn'
import Card from '../UI/Card'

const meta: Meta<typeof FadeIn> = {
  title: 'Animations/FadeIn',
  component: FadeIn,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right']
    }
  }
}

export default meta
type Story = StoryObj<typeof FadeIn>

export const Default: Story = {
  render: () => (
    <FadeIn>
      <Card>
        <div className="p-4">This content fades in from the bottom</div>
      </Card>
    </FadeIn>
  )
}

export const AllDirections: Story = {
  render: () => (
    <div className="space-y-8">
      <FadeIn direction="up">
        <Card><div className="p-4">Fade In Up</div></Card>
      </FadeIn>
      <FadeIn direction="down">
        <Card><div className="p-4">Fade In Down</div></Card>
      </FadeIn>
      <FadeIn direction="left">
        <Card><div className="p-4">Fade In Left</div></Card>
      </FadeIn>
      <FadeIn direction="right">
        <Card><div className="p-4">Fade In Right</div></Card>
      </FadeIn>
    </div>
  )
}

export const WithDelay: Story = {
  render: () => (
    <div className="space-y-4">
      <FadeIn delay={0}>
        <Card><div className="p-4">No delay</div></Card>
      </FadeIn>
      <FadeIn delay={0.2}>
        <Card><div className="p-4">0.2s delay</div></Card>
      </FadeIn>
      <FadeIn delay={0.4}>
        <Card><div className="p-4">0.4s delay</div></Card>
      </FadeIn>
      <FadeIn delay={0.6}>
        <Card><div className="p-4">0.6s delay</div></Card>
      </FadeIn>
    </div>
  )
}

export const StaggeredList: Story = {
  render: () => (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <FadeIn key={item} delay={index * 0.1}>
          <Card><div className="p-4">Item {item}</div></Card>
        </FadeIn>
      ))}
    </div>
  )
}

