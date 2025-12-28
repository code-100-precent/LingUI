import type { Meta, StoryObj } from '@storybook/react'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import Button from './Button'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This is a simple card with content.</p>
      </CardContent>
    </Card>
  )
}

export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
    </Card>
  )
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
      </CardFooter>
    </Card>
  )
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent>Default variant card</CardContent>
      </Card>
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
        </CardHeader>
        <CardContent>Outlined variant card</CardContent>
      </Card>
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
        </CardHeader>
        <CardContent>Elevated variant card</CardContent>
      </Card>
      <Card variant="filled">
        <CardHeader>
          <CardTitle>Filled</CardTitle>
        </CardHeader>
        <CardContent>Filled variant card</CardContent>
      </Card>
      <Card variant="glass">
        <CardHeader>
          <CardTitle>Glass</CardTitle>
        </CardHeader>
        <CardContent>Glass variant card</CardContent>
      </Card>
    </div>
  )
}

