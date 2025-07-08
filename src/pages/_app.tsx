import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/theme-provider'
import { useSecretMusicShortcut } from '@/components/useSecretMusicShortcut'

export default function App({ Component, pageProps }: AppProps) {
  const easterEggAudio = useSecretMusicShortcut()

  return (
    <ThemeProvider>
      {easterEggAudio}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
