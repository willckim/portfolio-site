'use client'

import { useEffect, useRef, useState } from 'react'

export function useSecretMusicShortcut() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const handleKeyCombo = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const combo =
        (isMac && e.metaKey && e.shiftKey && e.key === 'K') ||
        (!isMac && e.ctrlKey && e.altKey && e.key.toLowerCase() === 'w')

      if (combo) {
        e.preventDefault()
        setEnabled((prev) => {
          if (!prev) {
            audioRef.current?.play()
          } else {
            audioRef.current?.pause()
            audioRef.current!.currentTime = 0
          }
          return !prev
        })
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
