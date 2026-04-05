'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const INSTAGRAM_PROFILE = 'https://instagram.com/arteterapiaflow'

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  like_count?: number
  comments_count?: number
  caption?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
}

// Placeholder posts shown when token is not configured
const placeholderPosts = [
  {
    id: '1',
    media_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
    permalink: INSTAGRAM_PROFILE,
    caption: 'Explorando el color como lenguaje del alma 🎨',
    like_count: 142,
    comments_count: 18,
    media_type: 'IMAGE' as const,
  },
  {
    id: '2',
    media_url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop',
    permalink: INSTAGRAM_PROFILE,
    caption: 'Cada trazo cuenta una historia que las palabras no alcanzan',
    like_count: 98,
    comments_count: 12,
    media_type: 'IMAGE' as const,
  },
  {
    id: '3',
    media_url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    permalink: INSTAGRAM_PROFILE,
    caption: 'Taller grupal del mes: conectando con nuestra creatividad ✨',
    like_count: 215,
    comments_count: 34,
    media_type: 'IMAGE' as const,
  },
  {
    id: '4',
    media_url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=400&fit=crop',
    permalink: INSTAGRAM_PROFILE,
    caption: 'La acuarela y sus secretos: fluidez, soltar el control 💧',
    like_count: 176,
    comments_count: 22,
    media_type: 'IMAGE' as const,
  },
  {
    id: '5',
    media_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    permalink: INSTAGRAM_PROFILE,
    caption: 'Momentos de calma creativa en el estudio 🌿',
    like_count: 89,
    comments_count: 9,
    media_type: 'IMAGE' as const,
  },
  {
    id: '6',
    media_url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=400&fit=crop',
    permalink: INSTAGRAM_PROFILE,
    caption: 'Arte mandala: meditación activa para el bienestar emocional 🔮',
    like_count: 263,
    comments_count: 41,
    media_type: 'IMAGE' as const,
  },
]

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const CommentIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
  </svg>
)

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [isPlaceholder, setIsPlaceholder] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN

    if (!token) {
      setPosts(placeholderPosts)
      setIsPlaceholder(true)
      setLoading(false)
      return
    }

    const fetchPosts = async () => {
      try {
        const fields = 'id,media_url,permalink,like_count,comments_count,caption,media_type'
        const res = await fetch(
          `https://graph.instagram.com/me/media?fields=${fields}&limit=6&access_token=${token}`
        )
        if (!res.ok) throw new Error('Instagram API error')
        const data = await res.json()
        const imagePosts = (data.data as InstagramPost[])
          .filter((p) => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
          .slice(0, 6)
        setPosts(imagePosts.length >= 1 ? imagePosts : placeholderPosts)
        setIsPlaceholder(imagePosts.length < 1)
      } catch {
        setPosts(placeholderPosts)
        setIsPlaceholder(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="py-24 bg-crema">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-salvia bg-salvia/10 px-4 py-2 rounded-full mb-4">
            Comunidad
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-4">
            Seguime en{' '}
            <span className="text-terracota italic">Instagram</span>
          </h2>
          <p className="font-body text-negro/60 text-lg max-w-xl mx-auto">
            Compartimos reflexiones, técnicas y momentos del proceso creativo.{' '}
            <a
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracota font-semibold hover:underline underline-offset-4"
            >
              @arteterapiaflow
            </a>
          </p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-negro/8 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {posts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm block"
                aria-label={post.caption || 'Ver en Instagram'}
              >
                <Image
                  src={post.media_url}
                  alt={post.caption || 'Publicación de ArteterapiaFlow en Instagram'}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-negro/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4">
                  <div className="flex items-center gap-6 text-white">
                    <span className="flex items-center gap-1.5 font-body text-sm font-semibold">
                      <HeartIcon />
                      {post.like_count ?? 0}
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-sm font-semibold">
                      <CommentIcon />
                      {post.comments_count ?? 0}
                    </span>
                  </div>
                  {post.caption && (
                    <p className="font-body text-xs text-white/80 text-center line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                  )}
                </div>

                {/* Placeholder badge */}
                {isPlaceholder && i === 0 && (
                  <div className="absolute bottom-2 left-2 right-2 bg-negro/70 backdrop-blur-sm rounded-xl px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-body text-xs text-white text-center">
                      Seguinos en Instagram @arteterapiaflow
                    </p>
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body font-semibold text-sm bg-negro text-crema rounded-full px-8 py-4 hover:bg-negro/80 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
