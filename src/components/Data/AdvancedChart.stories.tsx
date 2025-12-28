import type { Meta, StoryObj } from '@storybook/react'
import AdvancedChart from './AdvancedChart'

const meta: Meta<typeof AdvancedChart> = {
  title: 'Data/AdvancedChart',
  component: AdvancedChart,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['bar', 'line', 'pie', 'area']
    }
  }
}

export default meta
type Story = StoryObj<typeof AdvancedChart>

const sampleData = [
  { label: 'Jan', value: 65, color: '#3b82f6' },
  { label: 'Feb', value: 59, color: '#10b981' },
  { label: 'Mar', value: 80, color: '#f59e0b' },
  { label: 'Apr', value: 81, color: '#ef4444' },
  { label: 'May', value: 56, color: '#8b5cf6' },
  { label: 'Jun', value: 55, color: '#ec4899' },
]

export const BarChart: Story = {
  args: {
    data: sampleData,
    type: 'bar',
    animated: true
  }
}

export const LineChart: Story = {
  args: {
    data: sampleData,
    type: 'line',
    animated: true
  }
}

export const AreaChart: Story = {
  args: {
    data: sampleData,
    type: 'area',
    animated: true
  }
}

export const PieChart: Story = {
  args: {
    data: sampleData,
    type: 'pie',
    animated: true
  }
}

export const WithoutAnimation: Story = {
  args: {
    data: sampleData,
    type: 'bar',
    animated: false
  }
}

export const WithoutLegend: Story = {
  args: {
    data: sampleData,
    type: 'bar',
    showLegend: false
  }
}

