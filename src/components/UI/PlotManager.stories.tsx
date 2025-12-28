import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import PlotManager from './PlotManager'

type PlotPoint = {
  id: string
  title: string
  description: string
  type: 'exposition' | 'rising_action' | 'climax' | 'falling_action' | 'resolution' | 'custom'
  chapter?: string
  characters: string[]
  location?: string
  time?: string
  isImportant: boolean
  isVisible: boolean
  order: number
  tags: string[]
  createdAt: string
  updatedAt: string
}

const meta: Meta<typeof PlotManager> = {
  title: 'UI/PlotManager',
  component: PlotManager,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PlotManager>

const mockPlotPoints = [
  {
    id: '1',
    title: 'Inciting Incident',
    description: 'The hero receives a call to adventure',
    type: 'exposition' as const,
    chapter: 'Chapter 1',
    characters: ['Protagonist'],
    location: 'Home',
    time: 'Morning',
    isImportant: true,
    isVisible: true,
    order: 1,
    tags: ['beginning'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '2',
    title: 'Rising Action',
    description: 'The hero faces their first challenge',
    type: 'rising_action' as const,
    chapter: 'Chapter 2',
    characters: ['Protagonist', 'Antagonist'],
    location: 'Forest',
    time: 'Afternoon',
    isImportant: true,
    isVisible: true,
    order: 2,
    tags: ['conflict'],
    createdAt: '2024-01-02',
    updatedAt: '2024-01-02'
  },
  {
    id: '3',
    title: 'Climax',
    description: 'The final confrontation',
    type: 'climax' as const,
    chapter: 'Chapter 5',
    characters: ['Protagonist', 'Antagonist'],
    location: 'Castle',
    time: 'Night',
    isImportant: true,
    isVisible: true,
    order: 3,
    tags: ['climax', 'final'],
    createdAt: '2024-01-03',
    updatedAt: '2024-01-03'
  }
]

export const Default: Story = {
  render: () => {
    const [plotPoints, setPlotPoints] = useState<PlotPoint[]>(mockPlotPoints)
    
    return (
      <PlotManager
        plotPoints={plotPoints}
        onAdd={(plotPoint) => {
          const newPoint = {
            ...plotPoint,
            id: String(plotPoints.length + 1),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
          setPlotPoints([...plotPoints, newPoint])
        }}
        onUpdate={(id, updates) => {
          setPlotPoints(plotPoints.map(p => p.id === id ? { ...p, ...updates } : p))
        }}
        onDelete={(id) => {
          setPlotPoints(plotPoints.filter(p => p.id !== id))
        }}
        onReorder={(from, to) => {
          const newPoints = [...plotPoints]
          const [moved] = newPoints.splice(from, 1)
          newPoints.splice(to, 0, moved)
          setPlotPoints(newPoints.map((p, i) => ({ ...p, order: i + 1 })))
        }}
        onToggleVisibility={(id) => {
          setPlotPoints(plotPoints.map(p => p.id === id ? { ...p, isVisible: !p.isVisible } : p))
        }}
        onToggleImportance={(id) => {
          setPlotPoints(plotPoints.map(p => p.id === id ? { ...p, isImportant: !p.isImportant } : p))
        }}
      />
    )
  }
}

export const Empty: Story = {
  render: () => {
    const [plotPoints, setPlotPoints] = useState<any[]>([])
    
    return (
      <PlotManager
        plotPoints={plotPoints}
        onAdd={(plotPoint) => {
          const newPoint = {
            ...plotPoint,
            id: '1',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
          setPlotPoints([newPoint])
        }}
        onUpdate={(id, updates) => {
          setPlotPoints(plotPoints.map(p => p.id === id ? { ...p, ...updates } : p))
        }}
        onDelete={(id) => {
          setPlotPoints(plotPoints.filter(p => p.id !== id))
        }}
        onReorder={() => {}}
        onToggleVisibility={(id) => {
          setPlotPoints(plotPoints.map(p => p.id === id ? { ...p, isVisible: !p.isVisible } : p))
        }}
        onToggleImportance={(id) => {
          setPlotPoints(plotPoints.map(p => p.id === id ? { ...p, isImportant: !p.isImportant } : p))
        }}
      />
    )
  }
}

