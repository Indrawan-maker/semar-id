// components/SmoothScroll.tsx
'use client'
import { useEffect, useRef } from 'react'

export default function SmoothScroll() {
  // Container untuk semua state scroll
  const scrollRef = useRef({
    current: 0,      // Posisi scroll yang tampil di layar
    target: 0,       // Posisi scroll yang user inginkan
    ease: 0.15,     // Kecepatan smooth (0.05-0.15 recommended)
    speed: 0,        // Kecepatan scroll (target - current)
    lastTime: 0      // Timestamp frame terakhir
  })

  useEffect(() => {
    // Initialize timestamp (HARUS di sini, bukan di useRef)
    scrollRef.current.lastTime = Date.now()
    
    let rafId: number  // ID untuk cancel animation

    // Linear interpolation: gerak dari start ke end secara smooth
    const lerp = (start: number, end: number, factor: number) => {
      return start * (1 - factor) + end * factor
    }

    // Main animation loop
    const animate = () => {
      const scroll = scrollRef.current
      
      // Hitung deltaTime (selisih waktu antar frame)
      const now = Date.now()
      // const deltaTime = now - scroll.lastTime
      scroll.lastTime = now

      // Update target dari actual scroll position
      scroll.target = window.scrollY
      
      // Smooth interpolation ke target
      scroll.current = lerp(scroll.current, scroll.target, scroll.ease)
      
      // Hitung speed (bisa dipake untuk efek lain)
      scroll.speed = scroll.target - scroll.current

      // Apply smooth scroll ke window
      if (Math.abs(scroll.target - scroll.current) > 0.05) {
        window.scrollTo({
          top: scroll.current,
          behavior: 'auto'  // Jangan 'smooth' (kita udah smooth sendiri)
        })
        
        // Continue animation
        rafId = requestAnimationFrame(animate)
      }
    }

    // Trigger animation saat user scroll
    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(animate)
      }
    }

    // Listen ke scroll event
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Cleanup saat component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return null  // Component ini ga render apa-apa
}