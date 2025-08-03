import './globals.css' // Deze regel is cruciaal!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}