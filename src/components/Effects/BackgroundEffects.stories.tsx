import { Meta, StoryObj } from '@storybook/react'
import BackgroundEffects from './BackgroundEffects'

const meta: Meta<typeof BackgroundEffects> = {
  title: 'Effects/BackgroundEffects',
  component: BackgroundEffects,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BackgroundEffects>

export const Default: Story = {
  args: {}
}

export const Neon: Story = {
  args: {
    theme: 'neon'
  }
}

export const Cyber: Story = {
  args: {
    theme: 'cyber'
  }
}

export const Fire: Story = {
  args: {
    theme: 'fire'
  }
}

export const Ice: Story = {
  args: {
    theme: 'ice'
  }
}

export const Rainbow: Story = {
  args: {
    theme: 'rainbow'
  }
}

export const Matrix: Story = {
  args: {
    theme: 'matrix'
  }
}

export const Stars: Story = {
  args: {
    theme: 'stars'
  }
}

export const LowIntensity: Story = {
  args: {
    intensity: 'low'
  }
}

export const HighIntensity: Story = {
  args: {
    intensity: 'high'
  }
}

export const ParticlesOnly: Story = {
  args: {
    enableParticles: true,
    enableWaves: false,
    enableGrid: false,
    enableGlow: false
  }
}

export const WavesOnly: Story = {
  args: {
    enableParticles: false,
    enableWaves: true,
    enableGrid: false,
    enableGlow: false
  }
}

