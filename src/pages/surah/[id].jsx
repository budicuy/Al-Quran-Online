import CardSurah from '@/components/CardSurah'
import Navbar from '@/components/Navbar'
import Favicon from '@/meta/Favicon'
import SeoMeta from '@/meta/SeoMeta'
import axios from 'axios'
import Head from 'next/head'

export default function Detail(props) {
    const data = props.data

    return (
        <div>
            <Head>
                <title>MyQuran | {data.data.namaLatin} </title>
                <SeoMeta />
                <Favicon />
            </Head>
            <Navbar />
            <CardSurah data={data} />
        </div>
    )
}

/* untuk Devlopment */

// export async function getServerSideProps(context) {
//     const { id } = context.params
//     const res = await axios.get(`https://equran.id/api/v2/surat/${id}`)
//     const data = await res.data

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             data,
//         },
//     }
// }

/* untuk Production */

export async function getStaticProps(context) {
    const { id } = context.params
    const res = await axios.get(`https://equran.id/api/v2/surat/${id}`)
    const data = await res.data

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
    const res = await axios.get('https://equran.id/api/v2/surat')
    const data = await res.data

    const paths = data.data.map((surah) => ({
        params: { id: surah.nomor.toString() },
    }))

    return { paths, fallback: false }
}
