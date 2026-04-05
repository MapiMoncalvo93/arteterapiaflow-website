'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  media_type: string
  thumbnail_url?: string
}

const PLACEHOLDER_POSTS = [
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
]

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN
    if (!token) {
      setLoading(false)
      return
    }

    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${token}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) setPosts(data.data)
      })
      .catch(() => {
        // silently fall back to placeholders
      })
      .finally(() => setLoading(false))
  }, [])

  const hasRealPosts = posts && posts.length > 0

  return (
    <section className="bg-crema py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-ocre bg-ocre/15 px-4 py-2 rounded-full mb-4">
            Instagram
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-3">
            Seguime en Instagram
          </h2>
          <p className="font-body text-negro/60 text-lg max-w-md mx-auto">
            Compartimos el proceso, los talleres y la magia de crear juntas.
          </p>
          <a
            href="https://instagram.com/arteterapiaflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-body font-semibold text-terracota hover:text-terracota/70 transition-colors"
          >
            @arteterapiaflow
          </a>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-negro/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {(hasRealPosts ? posts : PLACEHOLDER_POSTS.map((url, i) => ({ id: String(i), media_url: url, permalink: 'https://instagram.com/arteterapiaflow', media_type: 'IMAGE' }))).map(
              (post) => {
                const imgSrc = post.media_type === 'VIDEO' ? (post.thumbnail_url ?? post.media_url) : post.media_url
                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-negro/5"
                  >
                    <Image
                      src={imgSrc}
                      alt="Post de Instagram de ArteterapiaFlow"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-negro/0 group-hover:bg-negro/20 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </a>
                )
              }
            )}
          </div>
        )}
      </div>
    </section>
  )
}
