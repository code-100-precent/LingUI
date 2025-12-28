import { Meta, StoryObj } from '@storybook/react'
import FormSection from './FormSection'
import Input from '../UI/Input'
import Button from '../UI/Button'

const meta: Meta<typeof FormSection> = {
  title: 'Forms/FormSection',
  component: FormSection,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormSection>

export const Default: Story = {
  args: {
    title: 'Personal Information',
    description: 'Please provide your personal details',
    children: (
      <>
        <Input label="First Name" placeholder="Enter first name" />
        <Input label="Last Name" placeholder="Enter last name" />
        <Input label="Email" type="email" placeholder="Enter email" />
      </>
    )
  }
}

export const WithoutTitle: Story = {
  args: {
    description: 'This section has no title',
    children: (
      <>
        <Input label="Field 1" placeholder="Enter value" />
        <Input label="Field 2" placeholder="Enter value" />
      </>
    )
  }
}

export const WithoutDescription: Story = {
  args: {
    title: 'Account Settings',
    children: (
      <>
        <Input label="Username" placeholder="Enter username" />
        <Input label="Password" type="password" placeholder="Enter password" />
      </>
    )
  }
}

export const MultipleSections: Story = {
  render: () => (
    <div className="space-y-8">
      <FormSection
        title="Personal Information"
        description="Your personal details"
      >
        <Input label="Name" placeholder="Enter name" />
        <Input label="Email" type="email" placeholder="Enter email" />
        <Input label="Phone" placeholder="Enter phone" />
      </FormSection>
      
      <FormSection
        title="Address"
        description="Your address information"
      >
        <Input label="Street" placeholder="Enter street" />
        <Input label="City" placeholder="Enter city" />
        <Input label="Zip Code" placeholder="Enter zip code" />
      </FormSection>
      
      <FormSection
        title="Actions"
      >
        <div className="flex gap-2">
          <Button>Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </FormSection>
    </div>
  )
}

