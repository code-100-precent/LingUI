import type { Meta, StoryObj } from '@storybook/react'
import { ScrollReveal } from './ScrollReveal'
import Card from './Card'

const meta: Meta<typeof ScrollReveal> = {
  title: 'UI/ScrollReveal',
  component: ScrollReveal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollReveal>

export const Default: Story = {
  render: () => (
    <div className="h-[200vh]">
      <div className="h-screen" />
      <ScrollReveal>
        <Card>
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold">Scroll to reveal</h2>
          </div>
        </Card>
      </ScrollReveal>
      <div className="h-screen" />
    </div>
  )
}

export const AllDirections: Story = {
  render: () => (
    <div className="h-[300vh] space-y-8">
      <div className="h-screen" />
      <ScrollReveal direction="up">
        <Card><div className="p-4">Reveal Up</div></Card>
      </ScrollReveal>
      <ScrollReveal direction="down">
        <Card><div className="p-4">Reveal Down</div></Card>
      </ScrollReveal>
      <ScrollReveal direction="left">
        <Card><div className="p-4">Reveal Left</div></Card>
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Card><div className="p-4">Reveal Right</div></Card>
      </ScrollReveal>
      <div className="h-screen" />
    </div>
  )
}

export const WithDelay: Story = {
  render: () => (
    <div className="h-[200vh] space-y-4">
      <div className="h-screen" />
      {[0, 0.2, 0.4, 0.6].map((delay, i) => (
        <ScrollReveal key={i} delay={delay}>
          <Card><div className="p-4">Item {i + 1} (delay: {delay}s)</div></Card>
        </ScrollReveal>
      ))}
      <div className="h-screen" />
    </div>
  )
}

