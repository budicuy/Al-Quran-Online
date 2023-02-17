import CardTafsir from '@/components/CardTafsir'
import Footer from '@/components/Footer'
import NavbarMenu from '@/components/Navbar'
import Favicon from '@/meta/Favicon'
import SeoMeta from '@/meta/SeoMeta'
import axios from 'axios'
import Head from 'next/head'

export default function Tafsir(props) {
    const data = props.data

    return (
        <div>
            <Head>
                <title>MyQuran | {data.namaLatin}</title>
                <SeoMeta />
                <Favicon />
            </Head>
            <NavbarMenu />
            <CardTafsir tafsir={data} />
            <Footer />
        </div>
    )
}

/* untuk Devlopment */

// export async function getServerSideProps(context) {
//     const { id } = context.query
//     const getTafsir = await axios.get(`https://equran.id/api/v2/tafsir/${id}`)
//     const tafsir = await getTafsir.data.data

//     if (!tafsir) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             tafsir,
//             surah,
//         },
//     }
// }

/* untuk Production */

export async function getStaticProps(context) {
    const { id } = context.params

    const res = await axios.get(`https://equran.id/api/v2/tafsir/${id}`)
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
