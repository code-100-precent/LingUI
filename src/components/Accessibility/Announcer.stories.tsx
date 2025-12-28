import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Announcer from './Announcer'
import Button from '../UI/Button'

const meta: Meta<typeof Announcer> = {
  title: 'Accessibility/Announcer',
  component: Announcer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Announcer>

export const Default: Story = {
  render: () => {
    const [message, setMessage] = useState('')
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setMessage('Page loaded successfully')}>
            Announce Success
          </Button>
          <Button onClick={() => setMessage('Error occurred')}>
            Announce Error
          </Button>
        </div>
        <Announcer message={message} />
      </div>
    )
  }
}

export const Polite: Story = {
  render: () => {
    const [message, setMessage] = useState('')
    return (
      <div className="space-y-4">
        <Button onClick={() => setMessage('This is a polite announcement')}>
          Polite Announcement
        </Button>
        <Announcer message={message} priority="polite" />
      </div>
    )
  }
}

export const Assertive: Story = {
  render: () => {
    const [message, setMessage] = useState('')
    return (
      <div className="space-y-4">
        <Button onClick={() => setMessage('This is an assertive announcement')}>
          Assertive Announcement
        </Button>
        <Announcer message={message} priority="assertive" />
      </div>
    )
  }
}

