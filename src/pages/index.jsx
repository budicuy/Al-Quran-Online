import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
    const [surah, setSurah] = useState([]);
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSurah = async () => {
        setLoading(true);
        try {
            let response = await axios.get("https://equran.id/api/v2/surat");
            setSurah(response.data.data);
            setLoading(false);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getSurah();
    }, []);

    return (
        <div>
            <Head>
                <title>Al-Qur'an</title>
            </Head>
            <Navbar />
            <div className="container min-h-screen px-5 mb-5 md:px-14">
                <input
                    type="text"
                    className="w-full px-4 py-2 mt-5 bg-gray-100 border rounded-lg shadow-md focus:text-purple-500 focus:text-center placeholder:text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="🔎 Cari Surah ..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="w-full mt-5">
                    <div className="grid gap-3 text-purple-500 md:grid-cols-3">
                        {loading ? (
                            <div className="flex justify-center w-full mt-5 md:mt-10 md:col-span-3">
                                <svg
                                    className="w-10 h-10 text-purple-500 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    ></path>
                                </svg>
                            </div>
                        ) : (
                            surah
                                .filter((surah) => {
                                    // ketika search kosong maka akan menampilkan semua surah yang ada di API
                                    // jika tidak maka akan menampilkan namalatin surah yang sesuai dengan inputan user
                                    // abaikan huruf besar kecil spasi dan simbol yang ada di inputan user
                                    if (search == "") {
                                        return surah;
                                    }
                                    if (
                                        surah.namaLatin

                                            .toLowerCase()
                                            .replace(/[^a-zA-Z ]/g, "")
                                            .includes(
                                                search
                                                    .toLowerCase()
                                                    .replace(/[^a-zA-Z ]/g, "")
                                            )
                                    ) {
                                        return surah;
                                    }
                                })
                                .map((surah) => (
                                    <div className="p-4 bg-gray-100 rounded shadow-md cursor-pointer hover:bg-white">
                                        <h3 className="text-lg font-semibold ">
                                            {surah.nomor}. {surah.namaLatin}
                                        </h3>
                                        <hr className="border-b-1" />
                                        <p className="mt-5 text-5xl text-right ">
                                            {surah.nama}
                                        </p>
                                        <p>{surah.arti}</p>
                                    </div>
                                ))
                        )}
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <span>
                        Copyright &copy; {new Date().getFullYear()} Al-Qur'an -
                        All Rights Reserved | Made with BUDI
                    </span>
                </div>
            </footer>
        </div>
    );
}
