import { Meta, StoryObj } from '@storybook/react'
import EnhancedMagneticButton from './EnhancedMagneticButton'

const meta: Meta<typeof EnhancedMagneticButton> = {
  title: 'UI/EnhancedMagneticButton',
  component: EnhancedMagneticButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EnhancedMagneticButton>

export const Default: Story = {
  args: {
    children: 'Click Me'
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <EnhancedMagneticButton size="sm">Small</EnhancedMagneticButton>
      <EnhancedMagneticButton size="md">Medium</EnhancedMagneticButton>
      <EnhancedMagneticButton size="lg">Large</EnhancedMagneticButton>
      <EnhancedMagneticButton size="xl">Extra Large</EnhancedMagneticButton>
    </div>
  )
}

export const WithoutAudio: Story = {
  args: {
    children: 'No Audio',
    enableAudio: false
  }
}

export const WithoutRipple: Story = {
  args: {
    children: 'No Ripple',
    enableRipple: false
  }
}

export const WithoutGlow: Story = {
  args: {
    children: 'No Glow',
    enableGlow: false
  }
}

export const CustomIntensity: Story = {
  args: {
    children: 'High Intensity',
    intensity: 0.8
  }
}

