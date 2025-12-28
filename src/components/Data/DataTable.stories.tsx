import type { Meta, StoryObj } from '@storybook/react'
import DataTable from './DataTable'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const meta: Meta<typeof DataTable> = {
  title: 'Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataTable>

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
]

const columns = [
  { key: 'name' as keyof User, title: 'Name', sortable: true },
  { key: 'email' as keyof User, title: 'Email', sortable: true },
  { key: 'role' as keyof User, title: 'Role', sortable: true },
  { 
    key: 'status' as keyof User, 
    title: 'Status', 
    render: (value: string) => (
      <span className={`px-2 py-1 rounded text-xs ${
        value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {value}
      </span>
    )
  },
]

export const Default: Story = {
  args: {
    data: sampleData,
    columns
  }
}

export const WithSearch: Story = {
  args: {
    data: sampleData,
    columns,
    searchable: true,
    searchPlaceholder: 'Search users...'
  }
}

export const WithPagination: Story = {
  args: {
    data: sampleData,
    columns,
    pageSize: 2,
    showPagination: true
  }
}

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true
  }
}

export const Empty: Story = {
  args: {
    data: [],
    columns,
    emptyText: 'No data available'
  }
}

export const ClickableRows: Story = {
  args: {
    data: sampleData,
    columns,
    onRowClick: (record) => alert(`Clicked: ${record.name}`)
  }
}

