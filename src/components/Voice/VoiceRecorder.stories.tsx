import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import VoiceRecorder from './VoiceRecorder'
import Card from '../UI/Card'

const meta: Meta<typeof VoiceRecorder> = {
  title: 'Voice/VoiceRecorder',
  component: VoiceRecorder,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VoiceRecorder>

export const Default: Story = {
  args: {
    onRecordingComplete: (audioData) => {
      console.log('Recording complete, audio data length:', audioData.length)
    },
    onRecordingStart: () => {
      console.log('Recording started')
    },
    onRecordingStop: () => {
      console.log('Recording stopped')
    }
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onRecordingComplete: () => {}
  }
}

export const WithCallbacks: Story = {
  render: () => {
    const [status, setStatus] = useState<string>('Ready')
    const [audioDataLength, setAudioDataLength] = useState<number>(0)
    
    return (
      <div className="space-y-4">
        <VoiceRecorder
          onRecordingComplete={(audioData) => {
            setStatus('Recording complete')
            setAudioDataLength(audioData.length)
            console.log('Recording complete, audio data length:', audioData.length)
          }}
          onRecordingStart={() => {
            setStatus('Recording...')
            setAudioDataLength(0)
            console.log('Recording started')
          }}
          onRecordingStop={() => {
            setStatus('Processing...')
            console.log('Recording stopped')
          }}
        />
        <Card>
          <div className="p-4">
            <p className="text-sm font-medium mb-2">Status: {status}</p>
            {audioDataLength > 0 && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Audio data length: {audioDataLength} characters
              </p>
            )}
          </div>
        </Card>
      </div>
    )
  }
}

export const Interactive: Story = {
  render: () => {
    const [recordings, setRecordings] = useState<string[]>([])
    
    return (
      <div className="space-y-4">
        <VoiceRecorder
          onRecordingComplete={(audioData) => {
            setRecordings([...recordings, audioData])
            console.log('Recording saved, total:', recordings.length + 1)
          }}
          onRecordingStart={() => {
            console.log('Recording started')
          }}
          onRecordingStop={() => {
            console.log('Recording stopped')
          }}
        />
        {recordings.length > 0 && (
          <Card>
            <div className="p-4">
              <h3 className="font-medium mb-2">Recordings ({recordings.length})</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {recordings.length} recording(s) completed
              </p>
            </div>
          </Card>
        )}
      </div>
    )
  }
}

