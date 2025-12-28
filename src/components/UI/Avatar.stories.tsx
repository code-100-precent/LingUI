import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    }
  }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    fallback: 'JD'
  }
}

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
    fallback: 'JD'
  }
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  )
}

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="JD" />
      <Avatar fallback="AB" />
      <Avatar fallback="CD" />
      <Avatar fallback="EF" />
    </div>
  )
}

export const Clickable: Story = {
  render: () => (
    <Avatar 
      fallback="JD" 
      onClick={() => alert('Avatar clicked!')}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    />
  )
}

