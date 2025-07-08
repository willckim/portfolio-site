'use client'

import { useEffect, useRef } from 'react'

export function useSecretMusicShortcut() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isPlayingRef = useRef(false)

  useEffect(() => {
    const handleKeyCombo = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const combo =
        (isMac && e.metaKey && e.shiftKey && e.key === 'K') ||
        (!isMac && e.ctrlKey && e.altKey && e.key.toLowerCase() === 'w')

      if (combo) {
        e.preventDefault()
        if (!isPlayingRef.current) {
          audioRef.current?.play()
        } else {
          audioRef.current?.pause()
          if (audioRef.current) audioRef.current.currentTime = 0
        }
        isPlayingRef.current = !isPlayingRef.current
      }
    }

    window.addEventListener('keydown', handleKeyCombo)
    return () => window.removeEventListener('keydown', handleKeyCombo)
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/song.mp3"
      preload="auto"
    />
  )
}
