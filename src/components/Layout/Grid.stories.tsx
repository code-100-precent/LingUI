import type { Meta, StoryObj } from '@storybook/react'
import Grid, { GridItem } from './Grid'
import Card from '../UI/Card'

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12]
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    }
  }
}

export default meta
type Story = StoryObj<typeof Grid>

export const Default: Story = {
  render: () => (
    <Grid cols={3}>
      <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
      <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
      <GridItem><Card><div className="p-4">Item 3</div></Card></GridItem>
      <GridItem><Card><div className="p-4">Item 4</div></Card></GridItem>
      <GridItem><Card><div className="p-4">Item 5</div></Card></GridItem>
      <GridItem><Card><div className="p-4">Item 6</div></Card></GridItem>
    </Grid>
  )
}

export const AllColumnSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">1 Column</h3>
        <Grid cols={1}>
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
        </Grid>
      </div>
      <div>
        <h3 className="mb-2">2 Columns</h3>
        <Grid cols={2}>
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
        </Grid>
      </div>
      <div>
        <h3 className="mb-2">3 Columns</h3>
        <Grid cols={3}>
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 3</div></Card></GridItem>
        </Grid>
      </div>
      <div>
        <h3 className="mb-2">4 Columns</h3>
        <Grid cols={4}>
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 3</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 4</div></Card></GridItem>
        </Grid>
      </div>
    </div>
  )
}

export const WithSpans: Story = {
  render: () => (
    <Grid cols={12}>
      <GridItem span={12}><Card><div className="p-4">Full Width (12)</div></Card></GridItem>
      <GridItem span={6}><Card><div className="p-4">Half (6)</div></Card></GridItem>
      <GridItem span={6}><Card><div className="p-4">Half (6)</div></Card></GridItem>
      <GridItem span={4}><Card><div className="p-4">Third (4)</div></Card></GridItem>
      <GridItem span={4}><Card><div className="p-4">Third (4)</div></Card></GridItem>
      <GridItem span={4}><Card><div className="p-4">Third (4)</div></Card></GridItem>
    </Grid>
  )
}

export const AllGaps: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2">Small Gap</h3>
        <Grid cols={3} gap="sm">
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 3</div></Card></GridItem>
        </Grid>
      </div>
      <div>
        <h3 className="mb-2">Medium Gap</h3>
        <Grid cols={3} gap="md">
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 3</div></Card></GridItem>
        </Grid>
      </div>
      <div>
        <h3 className="mb-2">Large Gap</h3>
        <Grid cols={3} gap="lg">
          <GridItem><Card><div className="p-4">Item 1</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 2</div></Card></GridItem>
          <GridItem><Card><div className="p-4">Item 3</div></Card></GridItem>
        </Grid>
      </div>
    </div>
  )
}

