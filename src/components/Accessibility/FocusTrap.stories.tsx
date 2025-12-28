import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import FocusTrap from './FocusTrap'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Input from '../UI/Input'

const meta: Meta<typeof FocusTrap> = {
  title: 'Accessibility/FocusTrap',
  component: FocusTrap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FocusTrap>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Focus Trap Demo">
            <FocusTrap>
              <div className="space-y-4">
                <Input placeholder="First input" />
                <Input placeholder="Second input" />
                <div className="flex gap-2">
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button variant="primary" onClick={() => setIsOpen(false)}>Save</Button>
                </div>
              </div>
            </FocusTrap>
          </Modal>
        )}
      </>
    )
  }
}

export const InDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <FocusTrap>
              <div className="bg-white rounded-lg p-6 space-y-4 w-96">
                <h2 className="text-xl font-bold">Dialog Title</h2>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <div className="flex gap-2">
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button variant="primary" onClick={() => setIsOpen(false)}>Submit</Button>
                </div>
              </div>
            </FocusTrap>
          </div>
        )}
      </>
    )
  }
}

