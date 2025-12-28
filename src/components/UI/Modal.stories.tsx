import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Modal from './Modal'
import Button from './Button'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    }
  }
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
          <p>This is the modal content. You can put anything here.</p>
        </Modal>
      </>
    )
  }
}

export const AllSizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
    const [isOpen, setIsOpen] = useState(false)
    
    return (
      <>
        <div className="flex gap-2 mb-4">
          <Button onClick={() => { setSize('sm'); setIsOpen(true) }}>Small</Button>
          <Button onClick={() => { setSize('md'); setIsOpen(true) }}>Medium</Button>
          <Button onClick={() => { setSize('lg'); setIsOpen(true) }}>Large</Button>
          <Button onClick={() => { setSize('xl'); setIsOpen(true) }}>Extra Large</Button>
          <Button onClick={() => { setSize('full'); setIsOpen(true) }}>Full</Button>
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={`${size} Modal`} size={size}>
          <p>This is a {size} modal.</p>
        </Modal>
      </>
    )
  }
}

export const WithoutTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal Without Title</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This modal doesn't have a title.</p>
        </Modal>
      </>
    )
  }
}

export const WithoutCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          title="No Close Button"
          showCloseButton={false}
        >
          <p>This modal doesn't show a close button in the header.</p>
          <div className="mt-4">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    )
  }
}

export const WithContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Content">
          <div className="space-y-4">
            <p>This is a modal with more content.</p>
            <p>You can add forms, images, or any other content here.</p>
            <div className="flex gap-2">
              <Button variant="primary">Save</Button>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

