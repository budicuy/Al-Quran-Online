import { IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react'
import Link from 'next/link'

export default function ButtonNextAndprev({ data, page }) {
    return (
        <div className="fixed bottom-0 w-full px-5 py-2 bg-purple-900/80 rounded-t-xl">
            <div className="container flex items-center justify-between text-sm rounded-lg shadow-md md:text-lg">
                {data.suratSebelumnya ? (
                    <Link
                        className="flex items-center px-2 py-1 space-x-2 font-semibold text-white "
                        href={`/${page}/${data.suratSebelumnya.nomor}`}>
                        <IconArrowBadgeLeft />{' '}
                        <span>
                            {data.suratSebelumnya.namaLatin} :{' '}
                            {data.suratSebelumnya.nomor}
                        </span>
                    </Link>
                ) : (
                    <span></span>
                )}
                {data.suratSelanjutnya ? (
                    <Link
                        className="flex items-center px-2 py-1 space-x-2 font-semibold text-white "
                        href={`/${page}/${data.suratSelanjutnya.nomor}`}>
                        <span>
                            {data.suratSelanjutnya.nomor} :{' '}
                            {data.suratSelanjutnya.namaLatin}{' '}
                        </span>
                        <IconArrowBadgeRight />
                    </Link>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    )
}
