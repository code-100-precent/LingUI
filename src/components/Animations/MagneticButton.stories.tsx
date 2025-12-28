import { Meta, StoryObj } from '@storybook/react'
import MagneticButton from './MagneticButton'

const meta: Meta<typeof MagneticButton> = {
  title: 'Animations/MagneticButton',
  component: MagneticButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MagneticButton>

export const Default: Story = {
  render: () => (
    <MagneticButton onClick={() => alert('Clicked!')}>
      Magnetic Button
    </MagneticButton>
  )
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <MagneticButton variant="default">Default</MagneticButton>
      <MagneticButton variant="primary">Primary</MagneticButton>
      <MagneticButton variant="secondary">Secondary</MagneticButton>
      <MagneticButton variant="outline">Outline</MagneticButton>
      <MagneticButton variant="ghost">Ghost</MagneticButton>
    </div>
  )
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <MagneticButton size="sm">Small</MagneticButton>
      <MagneticButton size="md">Medium</MagneticButton>
      <MagneticButton size="lg">Large</MagneticButton>
    </div>
  )
}

export const HighIntensity: Story = {
  render: () => (
    <MagneticButton intensity={0.5}>
      High Intensity
    </MagneticButton>
  )
}

