import { Meta, StoryObj } from '@storybook/react'
import MarkdownPreview from './MarkdownPreview'

const meta: Meta<typeof MarkdownPreview> = {
  title: 'UI/MarkdownPreview',
  component: MarkdownPreview,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MarkdownPreview>

const sampleMarkdown = `# Heading 1
## Heading 2
### Heading 3

This is a **bold** text and this is *italic* text.

Here's a [link](https://example.com).

\`inline code\`

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3
`

export const Default: Story = {
  args: {
    content: sampleMarkdown
  }
}

export const SimpleText: Story = {
  args: {
    content: 'This is **bold** and this is *italic*.'
  }
}

export const WithCode: Story = {
  args: {
    content: `Here's some code:

\`\`\`typescript
const greeting = "Hello, World!"
console.log(greeting)
\`\`\`
`
  }
}

