"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, GripVertical, Plus } from "lucide-react"
import { books } from "@/lib/books-data"
import { exportToPDF } from "@/lib/pdf-export"

interface Book {
  id: string
  title: string
  series: string
  year: number
}

export function KanbanBoard() {
  const [myList, setMyList] = useState<Book[]>([])
  const [draggedItem, setDraggedItem] = useState<Book | null>(null)
  const [draggedFromMyList, setDraggedFromMyList] = useState(false)

  const handleAddToMyList = (book: Book) => {
    if (!myList.find((b) => b.id === book.id)) {
      setMyList([...myList, book])
    }
  }

  const handleRemoveFromMyList = (bookId: string) => {
    setMyList(myList.filter((b) => b.id !== bookId))
  }

  const handleDragStart = (book: Book, fromMyList: boolean) => {
    setDraggedItem(book)
    setDraggedFromMyList(fromMyList)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDropOnMyList = (e: React.DragEvent) => {
    e.preventDefault()
    if (draggedItem && !draggedFromMyList) {
      handleAddToMyList(draggedItem)
    }
    setDraggedItem(null)
  }

  const handleReorder = (dragIndex: number, dropIndex: number) => {
    const newList = [...myList]
    const [removed] = newList.splice(dragIndex, 1)
    newList.splice(dropIndex, 0, removed)
    setMyList(newList)
  }

  const handleExportMyList = () => {
    const bookList = myList.map((book) => book.title)
    exportToPDF(bookList, "My Brandon Sanderson Reading List")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* The Books Column */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">The Books</h2>
          <span className="text-sm text-muted-foreground">{books.length} books</span>
        </div>
        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
          {books.map((book) => (
            <div
              key={book.id}
              draggable
              onDragStart={() => handleDragStart(book, false)}
              className="group p-3 bg-card rounded-md border border-border hover:border-primary hover:shadow-sm transition-all cursor-move"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{book.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {book.series} • {book.year}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  onClick={() => handleAddToMyList(book)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* My List Column */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">My List</h2>
          <span className="text-sm text-muted-foreground">{myList.length} books</span>
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDropOnMyList}
          className="space-y-2 max-h-[600px] overflow-y-auto pr-2 min-h-[200px]"
        >
          {myList.length === 0 ? (
            <div className="flex items-center justify-center h-[200px] text-muted-foreground text-sm border-2 border-dashed border-border rounded-md">
              Drag books here or click the + button
            </div>
          ) : (
            myList.map((book, index) => (
              <div
                key={book.id}
                draggable
                onDragStart={() => handleDragStart(book, true)}
                onDragOver={(e) => {
                  e.preventDefault()
                  if (draggedFromMyList && draggedItem && draggedItem.id !== book.id) {
                    const dragIndex = myList.findIndex((b) => b.id === draggedItem.id)
                    handleReorder(dragIndex, index)
                  }
                }}
                className="group p-3 bg-secondary/10 rounded-md border border-border hover:border-secondary hover:shadow-sm transition-all cursor-move"
              >
                <div className="flex items-start gap-2">
                  <GripVertical className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-medium text-sm">{book.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {book.series} • {book.year}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-destructive hover:text-destructive"
                        onClick={() => handleRemoveFromMyList(book.id)}
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {myList.length > 0 && (
          <Button onClick={handleExportMyList} className="w-full mt-4" variant="default">
            <Download className="w-4 h-4 mr-2" />
            Export My List to PDF
          </Button>
        )}
      </Card>
    </div>
  )
}
