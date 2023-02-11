import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import CardDetail from '@/components/CardDetail'
import Footer from '@/components/Footer'
import LoadingComponent from '@/components/LoadingComponent'
import Navbar from '@/components/Navbar'

export default function Detail({ data }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [data])

    return (
        <div>
            <Head>
                <title>Surah {data.namaLatin}</title>
            </Head>
            <Navbar />
            {loading ? (
                <LoadingComponent />
            ) : (
                <CardDetail data={data} />
            )}
            <Footer />
        </div>
    )
}




export async function getStaticProps(context) {
    const { id } = context.params

    const res = await axios.get(
        `https://equran.id/api/v2/surat/${id}`
    )
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
    const res = await axios.get(
        'https://equran.id/api/v2/surat/'
    )
    const data = await res.data.data

    const paths = data.map((surah) => ({
        params: { id: surah.nomor.toString() },
    }))

    return { paths, fallback: false }
}
