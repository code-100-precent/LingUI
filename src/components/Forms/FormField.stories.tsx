import type { Meta, StoryObj } from '@storybook/react'
import FormField from './FormField'
import Input from '../UI/Input'

const meta: Meta<typeof FormField> = {
  title: 'Forms/FormField',
  component: FormField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormField>

export const Default: Story = {
  render: () => (
    <FormField label="Email">
      <Input placeholder="Enter your email" />
    </FormField>
  )
}

export const WithHint: Story = {
  render: () => (
    <FormField
      label="Password"
      hint="Must be at least 8 characters"
    >
      <Input type="password" placeholder="Enter password" />
    </FormField>
  )
}

export const WithError: Story = {
  render: () => (
    <FormField
      label="Email"
      error="Please enter a valid email address"
    >
      <Input placeholder="Enter your email" />
    </FormField>
  )
}

export const Required: Story = {
  render: () => (
    <FormField label="Username" required>
      <Input placeholder="Enter username" />
    </FormField>
  )
}

export const FullExample: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <FormField label="Email" required>
        <Input placeholder="email@example.com" />
      </FormField>
      <FormField
        label="Password"
        hint="Must be at least 8 characters"
        required
      >
        <Input type="password" placeholder="Enter password" />
      </FormField>
      <FormField
        label="Confirm Password"
        error="Passwords do not match"
      >
        <Input type="password" placeholder="Confirm password" />
      </FormField>
    </div>
  )
}

