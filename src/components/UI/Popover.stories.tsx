import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Popover from './Popover'
import Button from './Button'

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover']
    }
  }
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
        content={<div className="p-4">Popover content</div>}
      >
        <Button>Open Popover</Button>
      </Popover>
    )
  }
}

export const AllPlacements: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    return (
      <div className="flex items-center justify-center gap-8 p-20">
        <Popover
          open={open1}
          onOpenChange={setOpen1}
          placement="top"
          content={<div className="p-4">Top popover</div>}
        >
          <Button>Top</Button>
        </Popover>
        <Popover
          open={open2}
          onOpenChange={setOpen2}
          placement="right"
          content={<div className="p-4">Right popover</div>}
        >
          <Button>Right</Button>
        </Popover>
        <Popover
          open={open3}
          onOpenChange={setOpen3}
          placement="bottom"
          content={<div className="p-4">Bottom popover</div>}
        >
          <Button>Bottom</Button>
        </Popover>
        <Popover
          open={open4}
          onOpenChange={setOpen4}
          placement="left"
          content={<div className="p-4">Left popover</div>}
        >
          <Button>Left</Button>
        </Popover>
      </div>
    )
  }
}

export const HoverTrigger: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
        trigger="hover"
        content={<div className="p-4">Hover to show</div>}
      >
        <Button>Hover me</Button>
      </Popover>
    )
  }
}

export const WithCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
        showCloseButton
        content={<div className="p-4">Popover with close button</div>}
      >
        <Button>Open</Button>
      </Popover>
    )
  }
}

