import jsPDF from "jspdf"

interface BookWithStatus {
  id: string
  title: string
  series: string
  year: number
  isRead: boolean
}

export function exportToPDF(bookList: string[], title: string) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const lineHeight = 7
  let yPosition = margin

  // Title
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.text(title, margin, yPosition)
  yPosition += lineHeight * 2

  // Books
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")

  bookList.forEach((book, index) => {
    if (yPosition > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }

    // Checkbox
    doc.rect(margin, yPosition - 3, 3, 3)

    // Book title
    doc.text(`${index + 1}. ${book}`, margin + 6, yPosition)
    yPosition += lineHeight
  })

  doc.save(`${title.toLowerCase().replace(/\s+/g, "-")}.pdf`)
}

export function exportMyListToPDF(bookList: BookWithStatus[]) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const lineHeight = 7
  let yPosition = margin

  // Title
  doc.setFontSize(16)
  doc.setFont("helvetica", "bold")
  doc.text("My Brandon Sanderson Reading List", margin, yPosition)
  yPosition += lineHeight * 2

  // Books
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")

  bookList.forEach((book, index) => {
    if (yPosition > pageHeight - margin - 20) {
      doc.addPage()
      yPosition = margin
    }

    if (book.isRead) {
      // Book icon (simplified as filled circle with "B")
      doc.setFillColor(59, 64, 91) // Navy color from palette
      doc.circle(margin + 1.5, yPosition - 1.5, 1.5, "F")
      doc.setTextColor(244, 241, 222) // Cream color
      doc.setFontSize(7)
      doc.text("B", margin + 0.8, yPosition + 0.5)
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(10)
    } else {
      // Checkbox
      doc.rect(margin, yPosition - 3, 3, 3)
    }

    // Book title
    doc.text(`${index + 1}. ${book.title}`, margin + 6, yPosition)
    yPosition += lineHeight
  })

  // Add legend at the bottom
  yPosition += lineHeight
  doc.setFontSize(9)
  doc.setFont("helvetica", "bold")
  doc.text("Legend:", margin, yPosition)
  yPosition += lineHeight

  doc.setFont("helvetica", "normal")

  // Checkbox legend
  doc.rect(margin, yPosition - 3, 3, 3)
  doc.text("To Be Read", margin + 6, yPosition)
  yPosition += lineHeight

  // Book icon legend
  doc.setFillColor(59, 64, 91)
  doc.circle(margin + 1.5, yPosition - 1.5, 1.5, "F")
  doc.setTextColor(244, 241, 222)
  doc.setFontSize(7)
  doc.text("B", margin + 0.8, yPosition + 0.5)
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(9)
  doc.text("Finished Already", margin + 6, yPosition)

  doc.save("my-reading-list.pdf")
}
