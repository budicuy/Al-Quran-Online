import Head from 'next/head'
import Favicon from './Favicon'
import SeoMeta from './SeoMeta'

export default function IndexMeta() {
    return (
        <Head>
            <title>MyQuran</title>
            <SeoMeta />
            <Favicon />
        </Head>
    )
}
