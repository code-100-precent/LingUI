import type { Meta, StoryObj } from '@storybook/react'
import VirtualList from './VirtualList'
import Card from './Card'

const meta: Meta<typeof VirtualList> = {
  title: 'UI/VirtualList',
  component: VirtualList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VirtualList>

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `This is item number ${i + 1}`
}))

export const Default: Story = {
  render: () => (
    <VirtualList
      items={items}
      itemHeight={80}
      containerHeight={400}
      renderItem={(item) => (
        <Card className="mb-2">
          <div className="p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </Card>
      )}
    />
  )
}

export const SmallItems: Story = {
  render: () => (
    <VirtualList
      items={items}
      itemHeight={40}
      containerHeight={300}
      renderItem={(item) => (
        <div className="p-2 border-b">{item.name}</div>
      )}
    />
  )
}

