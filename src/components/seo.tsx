import React from 'react'
import NextHead from 'next/head'

type HeadProps = {
  session: string
  description?: string
  url?: string
  preview?: string
}

export default function Seo({ session, description, url, preview }: HeadProps) {
  return (
    <NextHead>
      <title>Boilerplate - {session}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/img/icon-512.png" />

      <link rel="apple-touch-icon" href="/img/icon-512.png" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />

      {/* Open Graph */}
      <meta property="og:title" content={session} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:url" content={url} key="ogurl" />
      <meta property="og:image" content={preview} key="ogimage" />
      <meta property="og:type" content="website" />
    </NextHead>
  )
}
