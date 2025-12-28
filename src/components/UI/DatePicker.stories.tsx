import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import DatePicker from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Select a date"
      />
    )
  }
}

export const WithLabel: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    return (
      <DatePicker
        label="Birth Date"
        value={date}
        onChange={setDate}
        placeholder="Select your birth date"
      />
    )
  }
}

export const WithError: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    return (
      <DatePicker
        label="Date"
        value={date}
        onChange={setDate}
        error="Please select a valid date"
      />
    )
  }
}

export const WithMinMax: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    const today = new Date()
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    return (
      <DatePicker
        label="Select date this month"
        value={date}
        onChange={setDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    )
  }
}

export const Disabled: Story = {
  render: () => {
    return (
      <DatePicker
        value={new Date()}
        onChange={() => {}}
        disabled
      />
    )
  }
}

