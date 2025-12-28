import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import DragSort, { type DragSortItem } from './DragSort'
import Card from './Card'

const meta: Meta<typeof DragSort> = {
  title: 'UI/DragSort',
  component: DragSort,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DragSort>

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<DragSortItem[]>([
      { id: '1', data: { name: 'Item 1' } },
      { id: '2', data: { name: 'Item 2' } },
      { id: '3', data: { name: 'Item 3' } },
      { id: '4', data: { name: 'Item 4' } },
    ])
    
    return (
      <DragSort
        items={items}
        onSort={(newItems) => setItems(newItems)}
        className="space-y-2"
      >
        {(item, index, isDragging) => (
          <Card className={isDragging ? 'opacity-50' : ''}>
            <div className="p-4">{item.data.name}</div>
          </Card>
        )}
      </DragSort>
    )
  }
}

export const Horizontal: Story = {
  render: () => {
    const [items, setItems] = useState<DragSortItem[]>([
      { id: '1', data: { name: 'A' } },
      { id: '2', data: { name: 'B' } },
      { id: '3', data: { name: 'C' } },
    ])
    
    return (
      <DragSort
        items={items}
        onSort={(newItems) => setItems(newItems)}
        direction="horizontal"
        className="flex gap-2"
      >
        {(item) => (
          <Card className="w-20 h-20 flex items-center justify-center">
            {item.data.name}
          </Card>
        )}
      </DragSort>
    )
  }
}

