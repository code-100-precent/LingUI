import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import PositionedToast from './PositionedToast'
import Button from './Button'

const meta: Meta<typeof PositionedToast> = {
  title: 'UI/PositionedToast',
  component: PositionedToast,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PositionedToast>

export const Default: Story = {
  render: () => {
    const [toasts, setToasts] = useState<string[]>([])
    
    const addToast = (type: 'success' | 'error' | 'warning' | 'info') => {
      const id = Date.now().toString()
      setToasts((prev) => [...prev, id])
      setTimeout(() => {
        setToasts((prev) => prev.filter(t => t !== id))
      }, 5000)
    }
    
    const getType = (index: number): 'success' | 'error' | 'warning' | 'info' => {
      const types: Array<'success' | 'error' | 'warning' | 'info'> = ['success', 'error', 'warning', 'info']
      return types[index % 4]
    }
    
    const getTitle = (index: number): string => {
      const titles = ['Success', 'Error', 'Warning', 'Info']
      return titles[index % 4]
    }
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => addToast('success')}>Success</Button>
          <Button onClick={() => addToast('error')}>Error</Button>
          <Button onClick={() => addToast('warning')}>Warning</Button>
          <Button onClick={() => addToast('info')}>Info</Button>
        </div>
        {toasts.map((id, index) => (
          <PositionedToast
            key={id}
            id={id}
            type={getType(index)}
            title={getTitle(index)}
            message="This is a toast message"
            onClose={(toastId) => setToasts((prev) => prev.filter(t => t !== toastId))}
            position="top-right"
          />
        ))}
      </div>
    )
  }
}

export const AllPositions: Story = {
  render: () => {
    const [show, setShow] = useState(false)
    return (
      <>
        <Button onClick={() => setShow(!show)}>Toggle Toast</Button>
        {show && (
          <>
            <PositionedToast
              id="1"
              type="success"
              title="Top Right"
              onClose={() => setShow(false)}
              position="top-right"
            />
            <PositionedToast
              id="2"
              type="info"
              title="Top Left"
              onClose={() => setShow(false)}
              position="top-left"
            />
            <PositionedToast
              id="3"
              type="warning"
              title="Bottom Right"
              onClose={() => setShow(false)}
              position="bottom-right"
            />
            <PositionedToast
              id="4"
              type="error"
              title="Bottom Left"
              onClose={() => setShow(false)}
              position="bottom-left"
            />
          </>
        )}
      </>
    )
  }
}

export const AllTypes: Story = {
  render: () => {
    const [show, setShow] = useState(false)
    return (
      <>
        <Button onClick={() => setShow(!show)}>Show All Types</Button>
        {show && (
          <div className="fixed top-4 right-4 space-y-2 z-50">
            <PositionedToast
              id="success"
              type="success"
              title="Success"
              message="Operation completed successfully"
              onClose={() => setShow(false)}
            />
            <PositionedToast
              id="error"
              type="error"
              title="Error"
              message="Something went wrong"
              onClose={() => setShow(false)}
            />
            <PositionedToast
              id="warning"
              type="warning"
              title="Warning"
              message="Please check your input"
              onClose={() => setShow(false)}
            />
            <PositionedToast
              id="info"
              type="info"
              title="Info"
              message="Here's some information"
              onClose={() => setShow(false)}
            />
          </div>
        )}
      </>
    )
  }
}

