import { Meta, StoryObj } from '@storybook/react'
import AdvancedForm from './AdvancedForm'

const meta: Meta<typeof AdvancedForm> = {
  title: 'Forms/AdvancedForm',
  component: AdvancedForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AdvancedForm>

const mockFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text' as const,
    required: true,
    placeholder: 'Enter your name'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email' as const,
    required: true,
    placeholder: 'Enter your email',
    validation: (value: string) => {
      if (!value.includes('@')) {
        return 'Please enter a valid email'
      }
      return null
    }
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password' as const,
    required: true,
    placeholder: 'Enter your password'
  },
  {
    name: 'bio',
    label: 'Bio',
    type: 'textarea' as const,
    placeholder: 'Tell us about yourself'
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select' as const,
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' }
    ]
  },
  {
    name: 'newsletter',
    label: 'Subscribe to newsletter',
    type: 'checkbox' as const
  }
]

export const Default: Story = {
  args: {
    fields: mockFields,
    onSubmit: (data) => {
      console.log('Form submitted:', data)
    }
  }
}

export const WithProgress: Story = {
  args: {
    fields: mockFields,
    onSubmit: (data) => {
      console.log('Form submitted:', data)
    },
    showProgress: true
  }
}

export const Animated: Story = {
  args: {
    fields: mockFields,
    onSubmit: (data) => {
      console.log('Form submitted:', data)
    },
    animated: true
  }
}

export const WithAutoSave: Story = {
  args: {
    fields: mockFields,
    onSubmit: (data) => {
      console.log('Form submitted:', data)
    },
    autoSave: true,
    autoSaveDelay: 2000
  }
}

export const SimpleForm: Story = {
  args: {
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'text' as const,
        required: true
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email' as const,
        required: true
      }
    ],
    onSubmit: (data) => {
      console.log('Form submitted:', data)
    }
  }
}

