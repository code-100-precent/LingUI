import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import EpicRatingEffect from './EpicRatingEffect'

const meta: Meta<typeof EpicRatingEffect> = {
  title: 'UI/EpicRatingEffect',
  component: EpicRatingEffect,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EpicRatingEffect>

export const Default: Story = {
  args: {
    score: 85,
    maxScore: 100
  }
}

export const HighScore: Story = {
  args: {
    score: 95,
    maxScore: 100
  }
}

export const LowScore: Story = {
  args: {
    score: 45,
    maxScore: 100
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <EpicRatingEffect score={85} size="sm" />
      <EpicRatingEffect score={85} size="md" />
      <EpicRatingEffect score={85} size="lg" />
      <EpicRatingEffect score={85} size="xl" />
    </div>
  )
}

export const WithoutAnimation: Story = {
  args: {
    score: 85,
    showAnimation: false
  }
}

export const WithoutParticles: Story = {
  args: {
    score: 85,
    showParticles: false
  }
}

export const Interactive: Story = {
  render: () => {
    const [score, setScore] = useState(75)
    return (
      <div className="flex flex-col items-center gap-4">
        <EpicRatingEffect 
          score={score} 
          onScoreChange={setScore}
        />
        <div className="flex gap-2">
          <button 
            onClick={() => setScore(Math.max(0, score - 10))}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            -10
          </button>
          <button 
            onClick={() => setScore(Math.min(100, score + 10))}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            +10
          </button>
        </div>
        <p>Score: {score}</p>
      </div>
    )
  }
}

