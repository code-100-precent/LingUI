import { Meta, StoryObj } from '@storybook/react'
import SkipLink from './SkipLink'

const meta: Meta<typeof SkipLink> = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SkipLink>

export const Default: Story = {
  render: () => (
    <div>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <header className="h-16 bg-gray-200 flex items-center px-4">
        <nav>
          <a href="#nav1">Nav 1</a>
          <a href="#nav2">Nav 2</a>
        </nav>
      </header>
      <main id="main-content" className="p-8">
        <h1>Main Content</h1>
        <p>Press Tab to see the skip link</p>
      </main>
    </div>
  )
}

export const CustomText: Story = {
  render: () => (
    <div>
      <SkipLink href="#content">Skip to content</SkipLink>
      <header className="h-16 bg-gray-200" />
      <main id="content" className="p-8">
        <h1>Content</h1>
      </main>
    </div>
  )
}

