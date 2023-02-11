import '@/styles/globals.css'
import nProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

// off spinner
nProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps, }) {
    return (
        <Component {...pageProps} />
    )
}