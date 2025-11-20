"use client"

import { useState } from "react"
import { BookList } from "@/components/book-list"
import { KanbanBoard } from "@/components/kanban-board"

export default function Home() {
  const [selectedOrder, setSelectedOrder] = useState<
    "Novels" | "Shorts & Novellas" | "Junior & YA" | "Cosmere" | "Non-Cosmere" | "GO FULL SANDO"
  >("Novels")

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-2">Brandon Sanderson Reading Order</h1>
          <p className="text-muted-foreground text-lg">Explore the Cosmere and beyond</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
          {/* Left sidebar with book list */}
          <BookList selectedOrder={selectedOrder} onOrderChange={setSelectedOrder} />

          {/* Right side with kanban board */}
          <KanbanBoard />
        </div>
      </div>
    </main>
  )
}
