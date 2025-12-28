import { Meta, StoryObj } from '@storybook/react'
import CallAudioPlayer, { ParsedMessage } from './CallAudioPlayer'

const meta: Meta<typeof CallAudioPlayer> = {
  title: 'Voice/CallAudioPlayer',
  component: CallAudioPlayer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CallAudioPlayer>

const mockMessages: ParsedMessage[] = [
  {
    role: 'user',
    content: 'Hello, I need help with my account.',
    timeInCallSecs: 0
  },
  {
    role: 'agent',
    content: 'Hi! I\'d be happy to help you. What seems to be the issue?',
    timeInCallSecs: 5
  },
  {
    role: 'user',
    content: 'I can\'t log into my account.',
    timeInCallSecs: 12
  },
  {
    role: 'agent',
    content: 'Let me help you with that. Can you provide your email address?',
    timeInCallSecs: 18
  },
  {
    role: 'user',
    content: 'Sure, it\'s user@example.com',
    timeInCallSecs: 25
  },
  {
    role: 'agent',
    content: 'Thank you. I\'ve sent a password reset link to your email.',
    timeInCallSecs: 32
  }
]

export const Default: Story = {
  args: {
    callId: 'call-123',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: 60,
    messages: mockMessages
  }
}

export const WithoutMessages: Story = {
  args: {
    callId: 'call-456',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: 120,
    messages: []
  }
}

export const ShortDuration: Story = {
  args: {
    callId: 'call-789',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: 30,
    messages: mockMessages.slice(0, 3)
  }
}

export const LongDuration: Story = {
  args: {
    callId: 'call-101',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: 600,
    messages: [
      ...mockMessages,
      {
        role: 'user',
        content: 'Is there anything else I can help you with?',
        timeInCallSecs: 100
      },
      {
        role: 'agent',
        content: 'No, that should be all. Have a great day!',
        timeInCallSecs: 110
      }
    ]
  }
}

export const NoAudio: Story = {
  args: {
    callId: 'call-202',
    audioUrl: '',
    hasAudio: false,
    durationSeconds: null,
    messages: []
  }
}

export const WithSystemMessages: Story = {
  args: {
    callId: 'call-303',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: 90,
    messages: [
      {
        role: 'system',
        content: 'Call started',
        timeInCallSecs: 0
      },
      ...mockMessages,
      {
        role: 'system',
        content: 'Call ended',
        timeInCallSecs: 85
      }
    ]
  }
}

export const ManyMessages: Story = {
  args: {
    callId: 'call-404',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: 300,
    messages: Array.from({ length: 20 }, (_, i) => ({
      role: (i % 2 === 0 ? 'user' : 'agent') as 'user' | 'agent',
      content: `Message ${i + 1}`,
      timeInCallSecs: i * 10
    }))
  }
}

export const NullDuration: Story = {
  args: {
    callId: 'call-505',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    hasAudio: true,
    durationSeconds: null,
    messages: mockMessages
  }
}

