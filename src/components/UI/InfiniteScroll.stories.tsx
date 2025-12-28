import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import InfiniteScroll from './InfiniteScroll'
import Card from './Card'
import LoadingAnimation from '../Animations/LoadingAnimation'

const meta: Meta<typeof InfiniteScroll> = {
  title: 'UI/InfiniteScroll',
  component: InfiniteScroll,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InfiniteScroll>

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1))
    const [hasMore, setHasMore] = useState(true)
    
    const loadMore = () => {
      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, i) => items.length + i + 1)
        setItems([...items, ...newItems])
        if (items.length >= 50) {
          setHasMore(false)
        }
      }, 1000)
    }
    
    return (
      <div className="h-96 overflow-auto">
        <InfiniteScroll
          hasMore={hasMore}
          loadMore={loadMore}
          loadingComponent={<LoadingAnimation />}
          endMessage={<p className="text-center text-gray-500 py-4">No more items</p>}
        >
          {items.map((item) => (
            <Card key={item} className="mb-2">
              <div className="p-4">Item {item}</div>
            </Card>
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

