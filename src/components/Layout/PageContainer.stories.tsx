import type { Meta, StoryObj } from '@storybook/react'
import PageContainer from './PageContainer'
import Card from '../UI/Card'

const meta: Meta<typeof PageContainer> = {
  title: 'Layout/PageContainer',
  component: PageContainer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageContainer>

export const Default: Story = {
  render: () => (
    <PageContainer>
      <Card>
        <div className="p-4">Content in default container</div>
      </Card>
    </PageContainer>
  )
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <PageContainer maxWidth="sm">
        <Card><div className="p-4">Small (max-w-2xl)</div></Card>
      </PageContainer>
      <PageContainer maxWidth="md">
        <Card><div className="p-4">Medium (max-w-4xl)</div></Card>
      </PageContainer>
      <PageContainer maxWidth="lg">
        <Card><div className="p-4">Large (max-w-6xl)</div></Card>
      </PageContainer>
      <PageContainer maxWidth="xl">
        <Card><div className="p-4">Extra Large (max-w-7xl)</div></Card>
      </PageContainer>
      <PageContainer maxWidth="full">
        <Card><div className="p-4">Full Width</div></Card>
      </PageContainer>
    </div>
  )
}

export const AllPadding: Story = {
  render: () => (
    <div className="space-y-8">
      <PageContainer padding="none">
        <Card><div className="p-4">No padding</div></Card>
      </PageContainer>
      <PageContainer padding="sm">
        <Card><div className="p-4">Small padding</div></Card>
      </PageContainer>
      <PageContainer padding="md">
        <Card><div className="p-4">Medium padding</div></Card>
      </PageContainer>
      <PageContainer padding="lg">
        <Card><div className="p-4">Large padding</div></Card>
      </PageContainer>
    </div>
  )
}

