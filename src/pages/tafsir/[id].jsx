import CardTafsir from '@/components/CardTafsir'
import Footer from '@/components/Footer'
import LoadingComponent from '@/components/LoadingComponent'
import NavbarMenu from '@/components/Navbar'
import Favicon from '@/meta/Favicon'
import SeoMeta from '@/meta/SeoMeta'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Tafsir(props) {
    const [loading, setLoading] = useState(true)

    const data = props.data.data

    useEffect(() => {
        if (data) {
            setLoading(false)
        }
    }, [data])

    return (
        <div>
            <Head>
                <title>MyQuran | {data.namaLatin}</title>
                <SeoMeta />
                <Favicon />
            </Head>
            <NavbarMenu />
            {loading ? <LoadingComponent /> : <CardTafsir tafsir={data} />}
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await axios.get(`https://equran.id/api/v2/tafsir/${id}`)
    const data = await res.data

    return {
        props: {
            data,
        },
    }
}
