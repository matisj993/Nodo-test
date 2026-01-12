export const metadata = {
  title: 'Nodo Paid Media',
  description: 'Nodo Paid Media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
