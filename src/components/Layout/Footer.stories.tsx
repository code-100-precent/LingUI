import { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    icpNumber: '京ICP备12345678号',
    teamName: 'Team',
    teamDesc: 'Development Team'
  }
}

export const WithCustomInfo: Story = {
  args: {
    icpNumber: '粤ICP备12345678号',
    teamName: 'LingUI Team',
    teamDesc: 'Building amazing UI components'
  }
}

export const WithoutICP: Story = {
  args: {
    teamName: 'Team',
    teamDesc: 'Development Team'
  }
}

export const FullExample: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p>This is the main content area.</p>
      </main>
      <Footer
        icpNumber="京ICP备12345678号"
        teamName="LingUI Team"
        teamDesc="Building amazing UI components"
      />
    </div>
  )
}

