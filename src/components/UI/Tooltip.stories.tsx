import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'
import Button from './Button'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus']
    }
  }
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  )
}

export const AllPlacements: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Tooltip content="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  )
}

export const ClickTrigger: Story = {
  render: () => (
    <Tooltip content="Click to show tooltip" trigger="click">
      <Button>Click me</Button>
    </Tooltip>
  )
}

export const WithRichContent: Story = {
  render: () => (
    <Tooltip 
      content={
        <div>
          <strong>Rich Content</strong>
          <p className="text-sm mt-1">This tooltip has multiple lines and formatting.</p>
        </div>
      }
    >
      <Button>Hover for rich content</Button>
    </Tooltip>
  )
}

