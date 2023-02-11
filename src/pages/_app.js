import '@/styles/globals.css'
import nProgress from 'nprogress'
import Router from 'next/router'
import { Quicksand } from '@next/font/google'

const quicksand = Quicksand({
    Quicksand: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

// off spinner
nProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps, }) {
    return (
        <main className={quicksand.className} >
            <Component {...pageProps} />
        </main >
    )
}