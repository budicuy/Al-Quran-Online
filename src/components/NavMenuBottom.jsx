import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NavMenuBottom({ data, page }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        console.log(data)
    }, [data])

    return (
        <div className="fixed bottom-0 w-full bg-purple-900 shadow shadow-purple-800/60 rounded-t-xl">
            {/* <div className="flex justify-between p-3 mt-5 text-sm bg-gray-100 border rounded-lg shadow-md md:justify-center md:gap-5 md:text-lg hover:bg-white">
                {data.suratSebelumnya ? (
                    <Link
                        className="px-2 py-1 font-semibold text-white border rounded bg-green-600/80"
                        href={`/${page}/${data.suratSebelumnya.nomor}`}>
                        ⬅ {data.suratSebelumnya.namaLatin} -{' '}
                        {data.suratSebelumnya.nomor} :{' '}
                        {data.suratSebelumnya.jumlahAyat}
                    </Link>
                ) : (
                    <span></span>
                )}
                {data.suratSelanjutnya ? (
                    <Link
                        className="px-2 py-1 font-semibold text-white border rounded bg-blue-600/80"
                        href={`/${page}/${data.suratSelanjutnya.nomor}`}>
                        {data.suratSelanjutnya.namaLatin} -{' '}
                        {data.suratSelanjutnya.nomor} :{' '}
                        {data.suratSelanjutnya.jumlahAyat} ➡
                    </Link>
                ) : (
                    <span></span>
                )}
            </div> */}
        </div>
    )
}
