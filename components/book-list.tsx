"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import { getBooksByCategory } from "@/lib/books-data"
import { exportToPDF } from "@/lib/pdf-export"

interface BookListProps {
  selectedOrder: "Novels" | "Shorts & Novellas" | "Junior & YA" | "Cosmere" | "Non-Cosmere" | "GO FULL SANDO"
  onOrderChange: (
    order: "Novels" | "Shorts & Novellas" | "Junior & YA" | "Cosmere" | "Non-Cosmere" | "GO FULL SANDO",
  ) => void
}

export function BookList({ selectedOrder, onOrderChange }: BookListProps) {
  const [showSeries, setShowSeries] = useState(true)

  const currentBooks = getBooksByCategory(selectedOrder)

  const handleExport = () => {
    const bookList = currentBooks.map((book) => book.title)
    exportToPDF(bookList, "Brandon Sanderson Reading Order")
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Brandon Sanderson Books</label>
            <div className="flex items-center gap-3 mb-3">
              <Select value={selectedOrder} onValueChange={(value) => onOrderChange(value as any)}>
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Novels">Novels</SelectItem>
                  <SelectItem value="Shorts & Novellas">Shorts & Novellas</SelectItem>
                  <SelectItem value="Junior & YA">Junior & YA</SelectItem>
                  <SelectItem value="Cosmere">Cosmere</SelectItem>
                  <SelectItem value="Non-Cosmere">Non-Cosmere</SelectItem>
                  <SelectItem value="GO FULL SANDO">GO FULL SANDO</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="series-info" checked={showSeries} onCheckedChange={setShowSeries} />
              <Label htmlFor="series-info" className="text-sm cursor-pointer">
                Show Series
              </Label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">Book List</h3>
            <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2">
              {currentBooks.map((book) => (
                <div key={book.id} className="py-1 text-sm font-medium">
                  {book.title}{" "}
                  {showSeries ? (
                    <span className="text-xs text-muted-foreground italic">
                      ({book.series} • {book.year})
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground italic">({book.year})</span>
                  )}
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
