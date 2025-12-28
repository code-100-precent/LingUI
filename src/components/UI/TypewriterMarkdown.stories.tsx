import { Meta, StoryObj } from '@storybook/react'
import TypewriterMarkdown from './TypewriterMarkdown'

const meta: Meta<typeof TypewriterMarkdown> = {
  title: 'UI/TypewriterMarkdown',
  component: TypewriterMarkdown,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TypewriterMarkdown>

const sampleMarkdown = `# Welcome

This is a **typewriter** effect with *markdown* support.

## Features

- Typewriter animation
- Markdown rendering
- Smooth transitions

\`\`\`javascript
console.log("Hello, World!")
\`\`\`
`

export const Default: Story = {
  args: {
    content: sampleMarkdown
  }
}

export const Fast: Story = {
  args: {
    content: sampleMarkdown,
    speed: 20
  }
}

export const Slow: Story = {
  args: {
    content: sampleMarkdown,
    speed: 100
  }
}

export const WithoutMarkdown: Story = {
  args: {
    content: sampleMarkdown,
    showMarkdownAfterTypewriter: false
  }
}

