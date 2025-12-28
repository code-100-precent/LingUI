import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { Home, Settings, User, Bell } from 'lucide-react'

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/')
    return (
      <div className="h-screen flex">
        <Sidebar
          currentPath={currentPath}
          onNavigate={(path) => {
            console.log('Navigate to:', path)
            setCurrentPath(path)
          }}
        />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p>Current path: {currentPath}</p>
        </main>
      </div>
    )
  }
}

export const WithCustomNavigation: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/home')
    const customNav = [
      { name: 'Home', href: '/home', icon: Home },
      { name: 'Settings', href: '/settings', icon: Settings },
      { name: 'Profile', href: '/profile', icon: User },
      { name: 'Notifications', href: '/notifications', icon: Bell },
    ]
    return (
      <div className="h-screen flex">
        <Sidebar
          navigation={customNav}
          currentPath={currentPath}
          onNavigate={(path) => setCurrentPath(path)}
        />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Custom Navigation</h1>
        </main>
      </div>
    )
  }
}

export const Authenticated: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/')
    return (
      <div className="h-screen flex">
        <Sidebar
          isAuthenticated={true}
          user={{
            displayName: 'John Doe',
            avatar: undefined
          }}
          groups={[
            { id: 1, name: 'Team A' },
            { id: 2, name: 'Team B' },
            { id: 3, name: 'Team C' },
          ]}
          currentOrganizationId={1}
          onOrganizationChange={(id) => console.log('Organization changed:', id)}
          onLogout={() => console.log('Logout')}
          currentPath={currentPath}
          onNavigate={(path) => setCurrentPath(path)}
        />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Authenticated Sidebar</h1>
        </main>
      </div>
    )
  }
}

export const WithGroups: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/')
    const [currentOrg, setCurrentOrg] = useState(1)
    return (
      <div className="h-screen flex">
        <Sidebar
          isAuthenticated={true}
          user={{ displayName: 'User' }}
          groups={[
            { id: 1, name: 'Engineering' },
            { id: 2, name: 'Design' },
            { id: 3, name: 'Marketing' },
            { id: 4, name: 'Sales' },
          ]}
          currentOrganizationId={currentOrg}
          onOrganizationChange={(id) => setCurrentOrg(id as number)}
          currentPath={currentPath}
          onNavigate={(path) => setCurrentPath(path)}
        />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">With Multiple Groups</h1>
          <p>Current organization: {currentOrg}</p>
        </main>
      </div>
    )
  }
}

export const Collapsed: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState('/')
    return (
      <div className="h-screen flex">
        <Sidebar
          currentPath={currentPath}
          onNavigate={(path) => setCurrentPath(path)}
        />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Collapsed Sidebar</h1>
          <p>Click the collapse button to see the collapsed state</p>
        </main>
      </div>
    )
  }
}

