'use client'

import { useEffect, useState } from 'react'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/arteterapiaflow'

// ─── Inline Widget ────────────────────────────────────────────────────────────
interface InlineWidgetProps {
  height?: number
  className?: string
}

export function CalendlyInline({ height = 650, className = '' }: InlineWidgetProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  )
}

// ─── Popup Button ─────────────────────────────────────────────────────────────
interface PopupButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function CalendlyPopupButton({ children, className = '', onClick }: PopupButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load Calendly widget script + CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  const handleClick = () => {
    onClick?.()
    if (mounted && typeof window !== 'undefined' && (window as Window & typeof globalThis & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly) {
      ;(window as Window & typeof globalThis & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly!.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
