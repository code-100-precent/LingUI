import type { Meta, StoryObj } from '@storybook/react'
import PageHeader from './PageHeader'
import Button from '../UI/Button'

const meta: Meta<typeof PageHeader> = {
  title: 'Layout/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {
    title: 'Page Title',
    subtitle: 'This is a subtitle for the page'
  }
}

export const WithBreadcrumbs: Story = {
  args: {
    title: 'Settings',
    subtitle: 'Manage your account settings',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Settings', href: '/settings' }
    ]
  }
}

export const WithActions: Story = {
  render: () => (
    <PageHeader
      title="Dashboard"
      subtitle="Overview of your data"
    >
      <div className="flex gap-2">
        <Button variant="outline">Export</Button>
        <Button variant="primary">Create New</Button>
      </div>
    </PageHeader>
  )
}

export const FullExample: Story = {
  render: () => (
    <PageHeader
      title="User Management"
      subtitle="Manage users and permissions"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admin', href: '/admin' },
        { label: 'Users' }
      ]}
    >
      <div className="flex gap-2">
        <Button variant="outline">Filter</Button>
        <Button variant="primary">Add User</Button>
      </div>
    </PageHeader>
  )
}

