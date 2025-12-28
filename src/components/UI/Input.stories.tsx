import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Input from './Input'
import { Eye, EyeOff, Search, Mail } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    clearable: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
    )
  }
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Input
        label="Email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your email"
      />
    )
  }
}

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Input
        label="Password"
        helperText="Must be at least 8 characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="password"
      />
    )
  }
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Input
        label="Email"
        error="Please enter a valid email address"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="email@example.com"
      />
    )
  }
}

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="space-y-4">
        <Input
          label="Search"
          leftIcon={<Search className="w-4 h-4" />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
        />
        <Input
          label="Email"
          leftIcon={<Mail className="w-4 h-4" />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="email@example.com"
        />
      </div>
    )
  }
}

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('Clearable input')
    return (
      <Input
        label="Clearable Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        onClear={() => setValue('')}
        placeholder="Type something..."
      />
    )
  }
}

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    return (
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        }
      />
    )
  }
}

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Input
        label="Loading Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        loading
        placeholder="Loading..."
      />
    )
  }
}

export const Disabled: Story = {
  render: () => {
    return (
      <Input
        label="Disabled Input"
        value="Disabled value"
        disabled
      />
    )
  }
}

export const AllSizes: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    return (
      <div className="space-y-4">
        <Input
          size="sm"
          label="Small"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Small input"
        />
        <Input
          size="md"
          label="Medium"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Medium input"
        />
        <Input
          size="lg"
          label="Large"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          placeholder="Large input"
        />
      </div>
    )
  }
}

