import Link from 'next/link'
import React from 'react'

export default function ButtonNextAndprev({ data, page }) {
    return (
        <div className="flex justify-between p-3 mt-5 text-sm bg-gray-100 border rounded-lg shadow-md md:justify-center md:gap-5 md:text-lg hover:bg-white">
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
        </div>
    )
}
