import CardSurah from '@/components/CardSurah'
import Footer from '@/components/Footer'
import LoadingComponent from '@/components/LoadingComponent'
import Navbar from '@/components/Navbar'
import Favicon from '@/meta/Favicon'
import SeoMeta from '@/meta/SeoMeta'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Detail({ data }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [data])

    return (
        <div>
            <Head>
                <title>MyQuran | {data.namaLatin}</title>
                <SeoMeta />
                <Favicon />
            </Head>
            <Navbar />
            {loading ? <LoadingComponent /> : <CardSurah data={data} />}
            <Footer />
        </div>
    )
}

export async function getStaticProps(context) {
    const { id } = context.params

    const res = await axios.get(`https://equran.id/api/v2/surat/${id}`)
    const data = await res.data.data

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data,
        },
    }
}

export async function getStaticPaths() {
    const res = await axios.get('https://equran.id/api/v2/surat/')
    const data = await res.data.data

    const paths = data.map((surah) => ({
        params: { id: surah.nomor.toString() },
    }))

    return { paths, fallback: false }
}
