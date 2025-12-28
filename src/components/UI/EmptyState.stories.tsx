import type { Meta, StoryObj } from '@storybook/react'
import EmptyState from './EmptyState'
import { Inbox, Search, FileX, AlertCircle } from 'lucide-react'

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    icon: Inbox,
    title: 'No items found',
    description: 'There are no items to display at this time.'
  }
}

export const WithAction: Story = {
  args: {
    icon: Inbox,
    title: 'No items found',
    description: 'Get started by creating your first item.',
    action: {
      label: 'Create Item',
      onClick: () => alert('Create clicked!')
    }
  }
}

export const NoIcon: Story = {
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter criteria.'
  }
}

export const SearchEmpty: Story = {
  args: {
    icon: Search,
    title: 'No results found',
    description: 'We couldn\'t find anything matching your search. Try different keywords.'
  }
}

export const ErrorState: Story = {
  args: {
    icon: AlertCircle,
    title: 'Something went wrong',
    description: 'We encountered an error while loading the data. Please try again later.',
    action: {
      label: 'Retry',
      onClick: () => alert('Retry clicked!')
    }
  }
}

export const FileEmpty: Story = {
  args: {
    icon: FileX,
    title: 'No files',
    description: 'Upload your first file to get started.'
  }
}

