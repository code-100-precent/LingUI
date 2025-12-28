import type { Meta, StoryObj } from '@storybook/react'
import FileUpload from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'UI/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: {
    onFileSelect: (files) => console.log('Selected files:', files),
    label: 'Upload Files'
  }
}

export const Multiple: Story = {
  args: {
    onFileSelect: (files) => console.log('Selected files:', files),
    multiple: true,
    maxFiles: 5,
    label: 'Upload Multiple Files'
  }
}

export const ImageOnly: Story = {
  args: {
    onFileSelect: (files) => console.log('Selected files:', files),
    accept: 'image/*',
    label: 'Upload Images'
  }
}

export const WithSizeLimit: Story = {
  args: {
    onFileSelect: (files) => console.log('Selected files:', files),
    maxSize: 5,
    label: 'Max 5MB'
  }
}

export const Disabled: Story = {
  args: {
    onFileSelect: (files) => console.log('Selected files:', files),
    disabled: true,
    label: 'Disabled Upload'
  }
}

export const WithError: Story = {
  args: {
    onFileSelect: (files) => console.log('Selected files:', files),
    label: 'Upload File',
    error: 'File size exceeds limit'
  }
}

