import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function ({ data }) {
    const [surah, setSurah] = useState([]);
    const [ayat, setAyat] = useState([]);
    const [audio, setAudio] = useState([]);

    useEffect(() => {
        setSurah(data);
        setAyat(data.ayat);
        setAudio(data.audioFull);

        document.querySelector("#audioPlayer").src = Object.values(
            data.audioFull
        )[0];
    }, []);

    const pengisiSuara = [
        "Abdullah Al Juhayni",
        "Abdul Muhsin Al Qasim",
        "Abdurrahman As Sudais",
        "Ibrahim Al Dossari",
        "Mishary Al Afasy",
    ];

    return (
        <div>
            <Head>
                <title>Surah {surah.namaLatin}</title>
            </Head>
            <Navbar />
            <div className="container px-5 mt-5 md:px-12">
                <div className="grid">
                    <div className="p-4 bg-gray-100 border rounded-lg shadow-md md:p-8">
                        <div className="flex justify-between">
                            <span className="text-lg font-semibold text-purple-600 md:text-xl ">
                                {surah.namaLatin} * {surah.arti}
                            </span>
                            <span>
                                <p className="mt-2 text-lg font-semibold text-purple-500 md:text-xl">
                                    {surah.tempatTurun} - {surah.jumlahAyat}{" "}
                                    Ayat
                                </p>
                            </span>
                        </div>
                        <hr className="mt-3 border-b-2" />
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <select
                                className="p-2 overflow-hidden text-xs font-semibold text-purple-700 bg-white border-2 border-purple-300 rounded-lg md:text-lg focus:right-2 ring-purple-700"
                                onChange={(e) => {
                                    const audio =
                                        document.querySelector("#audioPlayer");
                                    audio.src = e.target.value;
                                    const pause =
                                        document.querySelector("#pause");
                                    const play =
                                        document.querySelector("#play");
                                    // add class hidden
                                    pause.classList.add("hidden");
                                    play.classList.remove("hidden");
                                }}
                            >
                                {Object.keys(audio).map((key, index) => {
                                    return (
                                        <option
                                            className="text-xs bg-gray-100 hover:bg-purple-900 md:text-lg"
                                            value={audio[key]}
                                            id={`optionAudio${index}`}
                                        >
                                            {pengisiSuara[index]}
                                        </option>
                                    );
                                })}
                            </select>
                            <audio
                                controls
                                id="audioPlayer"
                                className="hidden"
                            ></audio>
                            <div className="flex justify-end gap-2 md:gap-5 ">
                                <button
                                    className="buttonAudio"
                                    id="play"
                                    onClick={() => {
                                        const audio =
                                            document.querySelector(
                                                "#audioPlayer"
                                            );
                                        audio.play();
                                        const pause =
                                            document.querySelector("#pause");
                                        const play =
                                            document.querySelector("#play");
                                        // add class hidden
                                        pause.classList.remove("hidden");
                                        play.classList.add("hidden");
                                    }}
                                >
                                    Play
                                </button>
                                <button
                                    id="pause"
                                    className="hidden buttonAudio"
                                    onClick={() => {
                                        const audio =
                                            document.querySelector(
                                                "#audioPlayer"
                                            );
                                        audio.pause();
                                        const pause =
                                            document.querySelector("#pause");
                                        const play =
                                            document.querySelector("#play");
                                        // add class hidden
                                        pause.classList.add("hidden");
                                        play.classList.remove("hidden");
                                    }}
                                >
                                    Pause
                                </button>
                                <div className="flex items-center justify-center px-4 py-2 font-bold text-white bg-red-800 rounded">
                                    <Link href="/">Tafsir</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
