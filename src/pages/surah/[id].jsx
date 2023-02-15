import CardSurah from '@/components/CardSurah'
import LoadingComponent from '@/components/LoadingComponent'
import Navbar from '@/components/Navbar'
import Favicon from '@/meta/Favicon'
import SeoMeta from '@/meta/SeoMeta'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Detail(props) {
    const [loading, setLoading] = useState(true)
    const data = props.data

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
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const res = await axios.get(`https://equran.id/api/v2/surat/${id}`)
    const data = await res.data
    return {
        props: {
            data,
        },
    }
}
