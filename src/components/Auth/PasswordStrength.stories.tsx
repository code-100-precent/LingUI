import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import PasswordStrength from './PasswordStrength'
import Input from '../UI/Input'

const meta: Meta<typeof PasswordStrength> = {
  title: 'Auth/PasswordStrength',
  component: PasswordStrength,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PasswordStrength>

export const Default: Story = {
  render: () => {
    const [password, setPassword] = useState('')
    return (
      <div className="space-y-4 w-64">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <PasswordStrength password={password} />
      </div>
    )
  }
}

export const WithRequirements: Story = {
  render: () => {
    const [password, setPassword] = useState('')
    return (
      <div className="space-y-4 w-64">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <PasswordStrength
          password={password}
          minLength={8}
          requireUppercase={true}
          requireLowercase={true}
          requireNumber={true}
          requireSpecialChar={true}
        />
      </div>
    )
  }
}

export const WeakPassword: Story = {
  render: () => (
    <PasswordStrength password="123" />
  )
}

export const MediumPassword: Story = {
  render: () => (
    <PasswordStrength password="Password123" />
  )
}

export const StrongPassword: Story = {
  render: () => (
    <PasswordStrength password="P@ssw0rd!123" />
  )
}

