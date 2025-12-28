import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Switch from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch checked={checked} onCheckedChange={setChecked} />
    )
  }
}

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch checked={checked} onCheckedChange={setChecked} />
    )
  }
}

export const AllSizes: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch size="sm" checked={checked1} onCheckedChange={setChecked1} />
          <span>Small</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch size="md" checked={checked2} onCheckedChange={setChecked2} />
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch size="lg" checked={checked3} onCheckedChange={setChecked3} />
          <span>Large</span>
        </div>
      </div>
    )
  }
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Switch checked={false} onCheckedChange={() => {}} disabled />
      <Switch checked={true} onCheckedChange={() => {}} disabled />
    </div>
  )
}

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <label className="text-sm font-medium">Enable notifications</label>
      </div>
    )
  }
}

