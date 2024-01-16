import "@/src/app/globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <Script defer src="/js/app.js" />
            <body>{children}
                <Script
                    src="https://kit.fontawesome.com/6d03ab6ee4.js" crossOrigin="anonymous"
                />
                <Script defer src="/js/script.js" />
            </body>

        </html>
    )
}