import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail({ data }) {
    const [surah, setSurah] = useState([]);
    const [ayat, setAyat] = useState([]);

    useEffect(() => {
        setSurah(data);
        setAyat(data.ayat);
    }, []);

    return (
        <div>
            <Head>
                <title>Detail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <h1 className="text-6xl font-bold">Detail</h1>
                    <p className="mt-3 text-2xl">
                        {surah.nama} {surah.arti}
                    </p>

                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        {ayat.map((surah, index) => (
                            <a
                                key={index}
                                href="#"
                                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-purple-600 focus:text-purple-600"
                            >
                                <h3 className="text-2xl font-bold">
                                    {surah.teksArab}
                                </h3>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await axios.get(`https://equran.id/api/v2/surat/${id}`);
    const data = await res.data.data;

    return {
        props: {
            data,
        },
    };
}
