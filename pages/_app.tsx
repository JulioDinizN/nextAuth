import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvier } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvier>
      <Component {...pageProps} />
    </AuthProvier>
  )
}

export default MyApp
