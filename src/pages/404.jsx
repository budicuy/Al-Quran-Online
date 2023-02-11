/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFoundPage() {
    useEffect(() => {
        const time = document.getElementById('time')
        let second = 30
        const timer = setInterval(() => {
            second--
            time.innerHTML = second
            if (second === 0) {
                clearInterval(timer)
                window.location.href = '/'
            }
        }, 1000)
    }, [])

    return (
        <div className="relative w-full h-screen max-h-screen bg-black ">
            <Head key="404">
                <title>404 | EQuran Gabut</title>
            </Head>

            <img
                className="object-cover w-full h-full opacity-50"
                src="/img/404.jpg"
                alt="Page Not Found | 404"
            />
            <div className="absolute z-50 block w-full px-5 text-center text-gray-200 translate-x-1/2 -translate-y-1/2 right-1/2 top-1/2">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
                    Page Not Found | 404
                </h1>
                <Link
                    href="/"
                    className="inline-block p-2 mt-5 text-lg font-semibold rounded-lg md:text-2xl bg-white/10 hover:bg-white/50">
                    ⬅ Kembali dalam{' '}
                    <span id="time">30</span>
                </Link>
                <span className="block mt-5 text-xl italic font-semibold md:text-3xl text-white/75 ">
                    “Lebih baik kehilangan sesuatu demi
                    Tuhan. Daripada harus kehilangan Tuhan
                    hanya demi mendapatkan sesuatu.”
                    <br />- Mufti Menk
                </span>
            </div>
        </div>
    )
}
