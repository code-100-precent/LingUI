import { Meta, StoryObj } from '@storybook/react'
import Wave from './Wave'
import Button from '../UI/Button'

const meta: Meta<typeof Wave> = {
  title: 'Animations/Wave',
  component: Wave,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Wave>

export const Default: Story = {
  render: () => (
    <Wave>
      <Button>Waving Button</Button>
    </Wave>
  )
}

export const Horizontal: Story = {
  render: () => (
    <Wave direction="horizontal">
      <Button>Horizontal Wave</Button>
    </Wave>
  )
}

export const Vertical: Story = {
  render: () => (
    <Wave direction="vertical">
      <Button>Vertical Wave</Button>
    </Wave>
  )
}

export const HighAmplitude: Story = {
  render: () => (
    <Wave amplitude={20}>
      <Button>High Amplitude</Button>
    </Wave>
  )
}

export const FastSpeed: Story = {
  render: () => (
    <Wave speed={2}>
      <Button>Fast Wave</Button>
    </Wave>
  )
}

