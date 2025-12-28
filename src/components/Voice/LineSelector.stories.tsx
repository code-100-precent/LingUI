import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import LineSelector from './LineSelector'

// Define LineMode type locally since it's from a business-specific path
type LineMode = 'webrtc' | 'websocket'

const meta: Meta<typeof LineSelector> = {
  title: 'Voice/LineSelector',
  component: LineSelector,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LineSelector>

export const Default: Story = {
  render: () => {
    const [lineMode, setLineMode] = useState<LineMode>('webrtc')
    return (
      <LineSelector
        lineMode={lineMode}
        onLineModeChange={setLineMode}
      />
    )
  }
}

export const WebRTC: Story = {
  render: () => {
    const [lineMode, setLineMode] = useState<LineMode>('webrtc')
    return (
      <div className="p-8">
        <LineSelector
          lineMode={lineMode}
          onLineModeChange={setLineMode}
        />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Current mode: {lineMode}
        </p>
      </div>
    )
  }
}

export const WebSocket: Story = {
  render: () => {
    const [lineMode, setLineMode] = useState<LineMode>('websocket')
    return (
      <div className="p-8">
        <LineSelector
          lineMode={lineMode}
          onLineModeChange={setLineMode}
        />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Current mode: {lineMode}
        </p>
      </div>
    )
  }
}

