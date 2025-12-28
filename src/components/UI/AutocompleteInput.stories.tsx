import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import AutocompleteInput from './AutocompleteInput'
import { Search } from 'lucide-react'

const meta: Meta<typeof AutocompleteInput> = {
  title: 'UI/AutocompleteInput',
  component: AutocompleteInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AutocompleteInput>

const options = [
  { value: 'apple', label: 'Apple', description: 'A red fruit' },
  { value: 'banana', label: 'Banana', description: 'A yellow fruit' },
  { value: 'orange', label: 'Orange', description: 'An orange fruit' },
  { value: 'grape', label: 'Grape', description: 'A purple fruit' },
  { value: 'watermelon', label: 'Watermelon', description: 'A large green fruit' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <AutocompleteInput
        label="Search Fruits"
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Type to search..."
      />
    )
  }
}

export const WithIcon: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <AutocompleteInput
        label="Search"
        value={value}
        onChange={setValue}
        options={options}
        leftIcon={<Search className="w-4 h-4" />}
        placeholder="Search..."
      />
    )
  }
}

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <AutocompleteInput
        label="Search Fruits"
        value={value}
        onChange={setValue}
        options={options}
        helperText="Select a fruit from the list"
        placeholder="Type to search..."
      />
    )
  }
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <AutocompleteInput
        label="Search Fruits"
        value={value}
        onChange={setValue}
        options={options}
        error="Please select a valid option"
        placeholder="Type to search..."
      />
    )
  }
}

