import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('tab1')
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">Content for Tab 1</div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">Content for Tab 2</div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">Content for Tab 3</div>
        </TabsContent>
      </Tabs>
    )
  }
}

export const WithContent: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p>This is the overview content.</p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p>This is the settings content.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p>This is the analytics content.</p>
          </div>
        </TabsContent>
      </Tabs>
    )
  }
}

