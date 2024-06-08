
import { Metadata } from "next"
import Providers from "@/components/Providers"
import Script from "next/script"
import { cookies } from 'next/headers'
import "@/styles/globals.css"


export const metadata: Metadata = {
  title: "My Blog"
}


export default async function ({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="My dear  family." />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script
          src="/static/eruda.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}