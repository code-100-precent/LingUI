import { Meta, StoryObj } from '@storybook/react'
import Layout from './Layout'
import Card from '../UI/Card'
import Button from '../UI/Button'

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {
  render: () => (
    <Layout>
      <div className="p-8">
        <Card>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Layout Example</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This is a full layout with sidebar and main content area.
            </p>
            <Button>Action Button</Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export const WithContent: Story = {
  render: () => (
    <Layout>
      <div className="p-8 space-y-4">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Card 1</h2>
            <p>First card content</p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Card 2</h2>
            <p>Second card content</p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Card 3</h2>
            <p>Third card content</p>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

