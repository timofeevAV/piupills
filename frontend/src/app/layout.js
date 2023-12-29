import './globals.css'
import localFont from 'next/font/local'
import { Suspense } from 'react'

const golosFont = localFont({ src: '../../public/fonts/GoloxTextVariable.ttf' })

export const metadata = {
  title: {
    template: '%s | PIU PILLS',
    default: 'PIU PILLS'
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang="ru"
          style={{fontFamily: golosFont.style.fontFamily}}>
      <body>
        <Suspense>
          <main>
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  )
}