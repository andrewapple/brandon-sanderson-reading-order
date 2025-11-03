export function exportToPDF(bookList: string[], title: string) {
  // Create a new window for printing
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow popups to export PDF")
    return
  }

  // Generate HTML content with checkboxes
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }
          body {
            font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #3d405b;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }
          h1 {
            color: #e07a5f;
            font-size: 24px;
            margin-bottom: 20px;
            border-bottom: 2px solid #81b29a;
            padding-bottom: 10px;
          }
          .book-item {
            display: flex;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #e0dcc8;
          }
          .checkbox {
            width: 18px;
            height: 18px;
            border: 2px solid #3d405b;
            border-radius: 3px;
            margin-right: 12px;
            flex-shrink: 0;
          }
          .book-title {
            font-size: 14px;
            line-height: 1.5;
          }
          .footer {
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #e0dcc8;
            font-size: 12px;
            color: #81b29a;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        ${bookList
          .map(
            (book) => `
          <div class="book-item">
            <div class="checkbox"></div>
            <div class="book-title">${book}</div>
          </div>
        `,
          )
          .join("")}
        <div class="footer">
          Created with Brandon Sanderson Reading Order Tracker
        </div>
      </body>
    </html>
  `

  printWindow.document.write(htmlContent)
  printWindow.document.close()

  // Wait for content to load, then print
  printWindow.onload = () => {
    printWindow.print()
  }
}
