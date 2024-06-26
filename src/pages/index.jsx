import CardHome from '@/components/CardHome'
import Footer from '@/components/Footer'
import LoadingComponent from '@/components/LoadingComponent'
import Navbar from '@/components/Navbar'
import IndexMeta from '@/meta/IndexMeta'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home(props) {
    const [surah, setSurah] = useState([])
    const [search, setSearch] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setSurah(props.data.data)

        if (surah) {
            setLoading(false)
        }

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === '/') {
                document.getElementById('search').focus()
            } else if (e.key === 'Escape') {
                document.getElementById('search').blur()
            } else if (e.key === 'Enter') {
                document.getElementById('search').blur()
            }
        })
    }, [props.data, surah])

    return (
        <div>
            <IndexMeta />
            <Navbar />
            <div className="container relative min-h-screen px-5 mb-5 md:px-14">
                <input
                    type="text"
                    id="search"
                    className="w-full py-3 mt-5 text-center bg-gray-100 border rounded shadow-md focus:text-purple-500 focus:text-center placeholder:text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="🔎 Cari Surah ... (CTRL + /)"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="w-full mt-5">
                    <div className="grid gap-3 text-purple-500 md:grid-cols-3">
                        {loading ? (
                            <div className="md:col-span-3">
                                <LoadingComponent />
                            </div>
                        ) : (
                            surah
                                .filter((surah) => {
                                    if (search == '') {
                                        return surah
                                    }
                                    if (
                                        surah.namaLatin
                                            .toLowerCase()
                                            .replace(/[^a-zA-Z ]/g, '')
                                            .includes(
                                                search
                                                    .toLowerCase()
                                                    .replace(/[^a-zA-Z ]/g, '')
                                            )
                                    ) {
                                        return surah
                                    }
                                })
                                .map((surah, index) => (
                                    <CardHome key={index} surah={surah} />
                                ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get('https://equran.id/api/v2/surat/')
    const data = await res.data

    return {
        props: {
            data,
        },
    }
}
