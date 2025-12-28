import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import ChapterOutline from './ChapterOutline'

type Chapter = {
  id: string
  title: string
  summary: string
  content: string
  wordCount: number
  targetWordCount: number
  status: 'draft' | 'writing' | 'editing' | 'completed'
  order: number
  isVisible: boolean
  tags: string[]
  characters: string[]
  plotPoints: string[]
  createdAt: string
  updatedAt: string
}

const meta: Meta<typeof ChapterOutline> = {
  title: 'UI/ChapterOutline',
  component: ChapterOutline,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ChapterOutline>

const mockChapters = [
  {
    id: '1',
    title: 'Chapter 1: The Beginning',
    summary: 'Introduction to the story',
    content: 'Once upon a time...',
    wordCount: 1200,
    targetWordCount: 2000,
    status: 'writing' as const,
    order: 1,
    isVisible: true,
    tags: ['intro', 'setup'],
    characters: ['Protagonist'],
    plotPoints: ['Introduction'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '2',
    title: 'Chapter 2: The Journey',
    summary: 'The adventure begins',
    content: 'The hero sets out...',
    wordCount: 1800,
    targetWordCount: 2000,
    status: 'editing' as const,
    order: 2,
    isVisible: true,
    tags: ['adventure'],
    characters: ['Protagonist', 'Sidekick'],
    plotPoints: ['Inciting Incident'],
    createdAt: '2024-01-02',
    updatedAt: '2024-01-02'
  },
  {
    id: '3',
    title: 'Chapter 3: The Conflict',
    summary: 'Challenges arise',
    content: 'Things get complicated...',
    wordCount: 2200,
    targetWordCount: 2000,
    status: 'completed' as const,
    order: 3,
    isVisible: true,
    tags: ['conflict', 'climax'],
    characters: ['Protagonist', 'Antagonist'],
    plotPoints: ['Rising Action'],
    createdAt: '2024-01-03',
    updatedAt: '2024-01-03'
  }
]

export const Default: Story = {
  render: () => {
    const [chapters, setChapters] = useState<Chapter[]>(mockChapters)
    
    return (
      <ChapterOutline
        chapters={chapters}
        onAdd={(chapter) => {
          const newChapter = {
            ...chapter,
            id: String(chapters.length + 1),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
          setChapters([...chapters, newChapter])
        }}
        onUpdate={(id, updates) => {
          setChapters(chapters.map(c => c.id === id ? { ...c, ...updates } : c))
        }}
        onDelete={(id) => {
          setChapters(chapters.filter(c => c.id !== id))
        }}
        onReorder={(from, to) => {
          const newChapters = [...chapters]
          const [moved] = newChapters.splice(from, 1)
          newChapters.splice(to, 0, moved)
          setChapters(newChapters.map((c, i) => ({ ...c, order: i + 1 })))
        }}
        onToggleVisibility={(id) => {
          setChapters(chapters.map(c => c.id === id ? { ...c, isVisible: !c.isVisible } : c))
        }}
        onChapterSelect={(chapter) => {
          console.log('Selected chapter:', chapter)
        }}
      />
    )
  }
}

export const Empty: Story = {
  render: () => {
    const [chapters, setChapters] = useState<any[]>([])
    
    return (
      <ChapterOutline
        chapters={chapters}
        onAdd={(chapter) => {
          const newChapter = {
            ...chapter,
            id: '1',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
          setChapters([newChapter])
        }}
        onUpdate={(id, updates) => {
          setChapters(chapters.map(c => c.id === id ? { ...c, ...updates } : c))
        }}
        onDelete={(id) => {
          setChapters(chapters.filter(c => c.id !== id))
        }}
        onReorder={() => {}}
        onToggleVisibility={(id) => {
          setChapters(chapters.map(c => c.id === id ? { ...c, isVisible: !c.isVisible } : c))
        }}
        onChapterSelect={() => {}}
      />
    )
  }
}

