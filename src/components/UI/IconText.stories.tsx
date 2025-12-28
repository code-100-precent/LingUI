import { Meta, StoryObj } from '@storybook/react'
import IconText from './IconText'
import { User, Mail, Phone, MapPin } from 'lucide-react'

const meta: Meta<typeof IconText> = {
  title: 'UI/IconText',
  component: IconText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconText>

export const Default: Story = {
  render: () => (
    <IconText icon={<User className="w-5 h-5" />}>
      John Doe
    </IconText>
  )
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <IconText icon={<User className="w-5 h-5" />} variant="default">Default</IconText>
      <IconText icon={<User className="w-5 h-5" />} variant="primary">Primary</IconText>
      <IconText icon={<User className="w-5 h-5" />} variant="secondary">Secondary</IconText>
      <IconText icon={<User className="w-5 h-5" />} variant="success">Success</IconText>
      <IconText icon={<User className="w-5 h-5" />} variant="warning">Warning</IconText>
      <IconText icon={<User className="w-5 h-5" />} variant="error">Error</IconText>
    </div>
  )
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <IconText icon={<User className="w-4 h-4" />} size="xs">Extra Small</IconText>
      <IconText icon={<User className="w-5 h-5" />} size="sm">Small</IconText>
      <IconText icon={<User className="w-5 h-5" />} size="md">Medium</IconText>
      <IconText icon={<User className="w-6 h-6" />} size="lg">Large</IconText>
      <IconText icon={<User className="w-7 h-7" />} size="xl">Extra Large</IconText>
    </div>
  )
}

export const Examples: Story = {
  render: () => (
    <div className="space-y-4">
      <IconText icon={<User className="w-5 h-5" />}>John Doe</IconText>
      <IconText icon={<Mail className="w-5 h-5" />}>john@example.com</IconText>
      <IconText icon={<Phone className="w-5 h-5" />}>+1 234 567 8900</IconText>
      <IconText icon={<MapPin className="w-5 h-5" />}>New York, NY</IconText>
    </div>
  )
}

