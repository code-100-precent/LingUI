import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PremiumOnboarding } from './PremiumOnboarding'
import Button from '../UI/Button'

const meta: Meta<typeof PremiumOnboarding> = {
  title: 'Animations/PremiumOnboarding',
  component: PremiumOnboarding,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PremiumOnboarding>

const mockSteps = [
  {
    id: '1',
    title: 'Welcome!',
    description: 'This is the first step of the onboarding process.',
    position: 'center' as const,
    animation: 'fade' as const
  },
  {
    id: '2',
    title: 'Get Started',
    description: 'Click the button below to begin your journey.',
    target: '#demo-button',
    position: 'bottom' as const,
    animation: 'slide' as const
  },
  {
    id: '3',
    title: 'Explore Features',
    description: 'Discover all the amazing features we have to offer.',
    position: 'center' as const,
    animation: 'scale' as const
  }
]

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)} id="demo-button">
          Start Onboarding
        </Button>
        <PremiumOnboarding
          steps={mockSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onComplete={() => {
            console.log('Onboarding completed!')
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}

export const WithProgress: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>
          Start Onboarding
        </Button>
        <PremiumOnboarding
          steps={mockSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          showProgress={true}
        />
      </div>
    )
  }
}

export const AutoPlay: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>
          Start Auto-Play Onboarding
        </Button>
        <PremiumOnboarding
          steps={mockSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          autoPlay={true}
        />
      </div>
    )
  }
}

export const NoSkip: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>
          Start Onboarding (No Skip)
        </Button>
        <PremiumOnboarding
          steps={mockSteps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          allowSkip={false}
        />
      </div>
    )
  }
}

