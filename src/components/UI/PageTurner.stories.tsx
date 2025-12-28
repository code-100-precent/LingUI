import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import PageTurner from './PageTurner'

const meta: Meta<typeof PageTurner> = {
  title: 'UI/PageTurner',
  component: PageTurner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageTurner>

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <PageTurner
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    )
  }
}

export const WithBookmarks: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [bookmarks, setBookmarks] = useState([3, 7])
    return (
      <PageTurner
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        bookmarks={bookmarks}
        onBookmark={(page) => {
          if (bookmarks.includes(page)) {
            setBookmarks(bookmarks.filter(b => b !== page))
          } else {
            setBookmarks([...bookmarks, page])
          }
        }}
      />
    )
  }
}

export const WithoutPageNumbers: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <PageTurner
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        showPageNumbers={false}
      />
    )
  }
}

export const WithoutProgress: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <PageTurner
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        showProgress={false}
      />
    )
  }
}

export const WithAutoSave: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <PageTurner
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
        autoSave={true}
        onAutoSave={(page) => {
          console.log('Auto-saving page:', page)
        }}
      />
    )
  }
}

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <PageTurner
        currentPage={currentPage}
        totalPages={100}
        onPageChange={setCurrentPage}
      />
    )
  }
}

