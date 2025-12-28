import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'
import { Check, X, AlertCircle, Info } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'outline', 'muted']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'square']
    }
  }
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Badge'
  }
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  )
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
}

export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
      <Badge shape="square">Square</Badge>
    </div>
  )
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge icon={<Check className="w-3 h-3" />}>Success</Badge>
      <Badge variant="error" icon={<X className="w-3 h-3" />}>Error</Badge>
      <Badge variant="warning" icon={<AlertCircle className="w-3 h-3" />}>Warning</Badge>
      <Badge variant="primary" icon={<Info className="w-3 h-3" />}>Info</Badge>
    </div>
  )
}

export const Clickable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge onClick={() => alert('Clicked!')} className="cursor-pointer">
        Clickable Badge
      </Badge>
      <Badge variant="primary" onClick={() => alert('Clicked!')} className="cursor-pointer">
        Clickable Primary
      </Badge>
    </div>
  )
}

