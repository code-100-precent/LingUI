import type { Meta, StoryObj } from '@storybook/react'
import StaggeredList from './StaggeredList'
import Card from '../UI/Card'

const meta: Meta<typeof StaggeredList> = {
  title: 'Animations/StaggeredList',
  component: StaggeredList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StaggeredList>

const createItems = () => [
  <Card key="1"><div className="p-4">Item 1</div></Card>,
  <Card key="2"><div className="p-4">Item 2</div></Card>,
  <Card key="3"><div className="p-4">Item 3</div></Card>,
  <Card key="4"><div className="p-4">Item 4</div></Card>,
  <Card key="5"><div className="p-4">Item 5</div></Card>,
]

export const Default: Story = {
  render: () => (
    <StaggeredList>
      {createItems()}
    </StaggeredList>
  )
}

export const AllDirections: Story = {
  render: () => {
    const items = createItems()
    return (
      <div className="space-y-8">
        <div>
          <h3 className="mb-4">Up</h3>
          <StaggeredList direction="up">
            {items}
          </StaggeredList>
        </div>
        <div>
          <h3 className="mb-4">Down</h3>
          <StaggeredList direction="down">
            {items}
          </StaggeredList>
        </div>
        <div>
          <h3 className="mb-4">Left</h3>
          <StaggeredList direction="left">
            {items}
          </StaggeredList>
        </div>
        <div>
          <h3 className="mb-4">Right</h3>
          <StaggeredList direction="right">
            {items}
          </StaggeredList>
        </div>
      </div>
    )
  }
}

export const CustomDelay: Story = {
  render: () => (
    <StaggeredList staggerDelay={0.2}>
      {createItems()}
    </StaggeredList>
  )
}

