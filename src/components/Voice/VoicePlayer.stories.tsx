import { Meta, StoryObj } from '@storybook/react'
import VoicePlayer from './VoicePlayer'

const meta: Meta<typeof VoicePlayer> = {
  title: 'Voice/VoicePlayer',
  component: VoicePlayer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VoicePlayer>

export const Default: Story = {
  args: {
    title: 'Sample Audio',
    onPlay: () => console.log('Play'),
    onPause: () => console.log('Pause'),
    onEnd: () => console.log('End')
  }
}

export const WithURL: Story = {
  args: {
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Audio from URL',
    onPlay: () => console.log('Play'),
    onPause: () => console.log('Pause'),
    onEnd: () => console.log('End')
  }
}

export const AutoPlay: Story = {
  args: {
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Auto Play Audio',
    autoPlay: true,
    onPlay: () => console.log('Play'),
    onPause: () => console.log('Pause'),
    onEnd: () => console.log('End')
  }
}

export const WithCallbacks: Story = {
  args: {
    title: 'Audio with Callbacks',
    onPlay: () => {
      console.log('Audio started playing')
    },
    onPause: () => {
      console.log('Audio paused')
    },
    onEnd: () => {
      console.log('Audio ended')
    }
  }
}

