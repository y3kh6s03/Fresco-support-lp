import './globals.css'

export const metadata = {
  title: 'フレスコ Support service',
  description: '有限会社フレスコ・カンパニー　直営給食サポートサービス',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
