"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import { books } from "@/lib/books-data"
import { exportToPDF } from "@/lib/pdf-export"

interface BookListProps {
  selectedOrder: "chronological" | "brandos-recs"
  onOrderChange: (order: "chronological" | "brandos-recs") => void
}

export function BookList({ selectedOrder, onOrderChange }: BookListProps) {
  const handleExport = () => {
    const bookList = books.map((book) => book.title)
    exportToPDF(bookList, "Brandon Sanderson Reading Order")
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Reading Order</label>
            <Select value={selectedOrder} onValueChange={(value) => onOrderChange(value as any)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chronological">Chronological</SelectItem>
                <SelectItem value="brandos-recs">Brando's Recs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">Book List</h3>
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="p-3 bg-muted/30 rounded-md border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="font-medium text-sm">{book.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {book.series} • {book.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleExport} className="w-full" variant="default">
            <Download className="w-4 h-4 mr-2" />
            Export to PDF
          </Button>
        </div>
      </Card>
    </div>
  )
}
