import './globals.css'

export const metadata = {
  title: 'Infinite Scroll Gallery',
  description: '✍ Created By Deepak Patankar ^_~',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
