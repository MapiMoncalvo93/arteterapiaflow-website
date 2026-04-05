'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url: string
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full rounded-3xl overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1&primary_color=c4714a`}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
