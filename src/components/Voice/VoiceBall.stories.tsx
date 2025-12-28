import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import VoiceBall from './VoiceBall'

const meta: Meta<typeof VoiceBall> = {
  title: 'Voice/VoiceBall',
  component: VoiceBall,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VoiceBall>

export const Default: Story = {
  render: () => {
    const [isCalling, setIsCalling] = useState(false)
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <VoiceBall
          isCalling={isCalling}
          onToggleCall={() => setIsCalling(!isCalling)}
        />
      </div>
    )
  }
}

export const Idle: Story = {
  args: {
    isCalling: false,
    onToggleCall: () => console.log('Toggle call')
  }
}

export const Calling: Story = {
  args: {
    isCalling: true,
    onToggleCall: () => console.log('Toggle call')
  }
}

export const Interactive: Story = {
  render: () => {
    const [isCalling, setIsCalling] = useState(false)
    return (
      <div className="p-8 space-y-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <VoiceBall
            isCalling={isCalling}
            onToggleCall={() => setIsCalling(!isCalling)}
          />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Status: {isCalling ? 'Calling' : 'Idle'}
          </p>
        </div>
      </div>
    )
  }
}

