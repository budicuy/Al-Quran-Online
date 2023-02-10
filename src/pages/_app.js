// eslint-disable-next-line import/no-unresolved
import '@/styles/globals.css'

// eslint-disable-next-line react/prop-types
export default function App({
  Component,
  pageProps,
}) {
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
  return <Component {...pageProps} />
}
