import type { Meta, StoryObj } from '@storybook/react'
import Chart from './Chart'

const meta: Meta<typeof Chart> = {
  title: 'UI/Chart',
  component: Chart,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['bar', 'line', 'pie', 'doughnut']
    }
  }
}

export default meta
type Story = StoryObj<typeof Chart>

const sampleData = [
  { label: 'Jan', value: 65, color: '#3b82f6' },
  { label: 'Feb', value: 59, color: '#10b981' },
  { label: 'Mar', value: 80, color: '#f59e0b' },
  { label: 'Apr', value: 81, color: '#ef4444' },
  { label: 'May', value: 56, color: '#8b5cf6' },
]

export const BarChart: Story = {
  args: {
    data: sampleData,
    type: 'bar'
  }
}

export const LineChart: Story = {
  args: {
    data: sampleData,
    type: 'line'
  }
}

export const PieChart: Story = {
  args: {
    data: sampleData,
    type: 'pie'
  }
}

export const DoughnutChart: Story = {
  args: {
    data: sampleData,
    type: 'doughnut'
  }
}

export const WithoutLegend: Story = {
  args: {
    data: sampleData,
    type: 'bar',
    showLegend: false
  }
}

export const WithoutValues: Story = {
  args: {
    data: sampleData,
    type: 'bar',
    showValues: false
  }
}

