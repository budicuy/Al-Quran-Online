import { IconSettings2 } from '@tabler/icons-react'
import Link from 'next/link'

export default function ButtonNextAndprev({ data, page }) {
    return (
        <div className="fixed bottom-0 w-full px-5 py-2 bg-purple-900/80 rounded-t-xl">
            <div className="container flex items-center justify-between text-sm rounded-lg shadow-md md:text-lg">
                {data.suratSebelumnya ? (
                    <Link
                        className="block px-2 py-1 font-semibold text-white "
                        href={`/${page}/${data.suratSebelumnya.nomor}`}>
                        ⬅ {data.suratSebelumnya.namaLatin}
                    </Link>
                ) : (
                    <span className="block"></span>
                )}
                {data.suratSelanjutnya ? (
                    <Link
                        className="block px-2 py-1 font-semibold text-white "
                        href={`/${page}/${data.suratSelanjutnya.nomor}`}>
                        {data.suratSelanjutnya.namaLatin} ➡
                    </Link>
                ) : (
                    <span className="block"></span>
                )}
            </div>
        </div>
    )
}
