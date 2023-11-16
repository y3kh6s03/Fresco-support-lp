import { Noto_Sans_JP } from "next/font/google";

import "app/styles/main.scss"


export const metadata = {
  title: 'フレスコ Support service',
  description: '有限会社フレスコ・カンパニー　直営給食サポートサービス',
}

const NotoJP = Noto_Sans_JP({
  weight: ["300", "800"],
  subsets: ["latin"],
  display: "swap"
})






export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <main className={`wrapper ${NotoJP.className}`}>
          {children}
        </main>
      </body>
    </html>
  )
}
