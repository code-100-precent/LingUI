import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import ConfirmDialog from './ConfirmDialog'
import Button from './Button'
import { AlertTriangle, Trash2, CheckCircle } from 'lucide-react'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'UI/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'danger', 'warning', 'success']
    }
  }
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => alert('Confirmed!')}
          title="Confirm Action"
          description="Are you sure you want to proceed with this action?"
        />
      </>
    )
  }
}

export const Danger: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button variant="destructive" onClick={() => setIsOpen(true)}>Delete</Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => alert('Deleted!')}
          title="Delete Item"
          description="This action cannot be undone. Are you sure you want to delete this item?"
          variant="danger"
          confirmText="Delete"
          cancelText="Cancel"
          icon={<Trash2 className="w-6 h-6" />}
        />
      </>
    )
  }
}

export const Warning: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button variant="warning" onClick={() => setIsOpen(true)}>Warning</Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => alert('Proceeded!')}
          title="Warning"
          description="This action may have unintended consequences. Do you want to continue?"
          variant="warning"
          icon={<AlertTriangle className="w-6 h-6" />}
        />
      </>
    )
  }
}

export const Success: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button variant="success" onClick={() => setIsOpen(true)}>Success</Button>
        <ConfirmDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => alert('Completed!')}
          title="Success"
          description="Your action has been completed successfully."
          variant="success"
          icon={<CheckCircle className="w-6 h-6" />}
        />
      </>
    )
  }
}

