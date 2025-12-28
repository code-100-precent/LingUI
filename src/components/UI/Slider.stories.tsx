import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Slider from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return (
      <div className="w-64">
        <Slider value={value} onValueChange={setValue} />
        <p className="mt-2 text-sm text-gray-600">Value: {value[0]}</p>
      </div>
    )
  }
}

export const WithRange: Story = {
  render: () => {
    const [value, setValue] = useState([20, 80])
    return (
      <div className="w-64">
        <Slider value={value} onValueChange={setValue} min={0} max={100} />
        <p className="mt-2 text-sm text-gray-600">
          Range: {value[0]} - {value[1]}
        </p>
      </div>
    )
  }
}

export const WithSteps: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return (
      <div className="w-64">
        <Slider value={value} onValueChange={setValue} min={0} max={100} step={10} />
        <p className="mt-2 text-sm text-gray-600">Value: {value[0]} (step: 10)</p>
      </div>
    )
  }
}

export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState([25])
    return (
      <div className="w-64">
        <Slider value={value} onValueChange={setValue} min={0} max={200} />
        <p className="mt-2 text-sm text-gray-600">Value: {value[0]} / 200</p>
      </div>
    )
  }
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return (
      <div className="w-64">
        <Slider value={value} onValueChange={setValue} disabled />
      </div>
    )
  }
}

