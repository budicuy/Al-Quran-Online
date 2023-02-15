import Link from 'next/link'
import { useEffect } from 'react'
import Button from '@/components/Button'
import ButtonNextAndprev from './ButtonNextAndprev'

export default function CardDetail(props) {
    const surah = props.data

    useEffect(() => {
        document.querySelector('#audioPlayer').src =
            Object.values(surah.audioFull)[0] || ''
    }, [surah])

    const pengisiSuara = [
        'Abdullah Al Juhayni',
        'Abdul Muhsin Al Qasim',
        'Abdurrahman As Sudais',
        'Ibrahim Al Dossari',
        'Mishary Al Afasi',
    ]

    return (
        <div className="container px-5 mt-5 mb-5 md:px-12">
            <div className="grid">
                <div className="p-4 bg-gray-100 border rounded-lg shadow-md md:p-8">
                    <div className="text-center md:text-left">
                        <span className="text-lg font-semibold text-purple-600 md:text-left md:text-xl">
                            {surah.namaLatin} - {surah.arti}
                        </span>
                        <span>
                            <p className="mt-2 text-lg font-semibold text-purple-500 md:text-xl">
                                {surah.tempatTurun} - {surah.jumlahAyat} Ayat
                            </p>
                        </span>
                    </div>
                    <hr className="mt-3 border-b-2" />
                    <div className="flex flex-wrap justify-center gap-5 mt-4 md:justify-between">
                        <select
                            className="w-full p-2 overflow-hidden text-xs font-semibold text-purple-700 bg-white border-2 border-purple-300 rounded-lg md:w-1/2 md:max-w-none md:text-lg focus:right-2 ring-purple-700"
                            onChange={(e) => {
                                const audio =
                                    document.querySelector('#audioPlayer')
                                audio.src = e.target.value
                                const pause = document.querySelector('#pause')
                                const play = document.querySelector('#play')
                                // add class hidden
                                pause.classList.add('hidden')
                                play.classList.remove('hidden')
                            }}>
                            {Object.keys(surah.audioFull).map((key, index) => {
                                return (
                                    <option
                                        key={index}
                                        className="text-xs bg-gray-100 hover:bg-purple-900 md:text-lg"
                                        value={surah.audioFull[key]}
                                        id={`optionAudio${index}`}>
                                        {pengisiSuara[index]}
                                    </option>
                                )
                            })}
                        </select>
                        <audio
                            controls
                            id="audioPlayer"
                            className="hidden"></audio>
                        <Button
                            data={surah}
                            buttonName="Tafsir"
                            page="tafsir"
                        />
                    </div>
                </div>
                {surah.ayat.map((ayat, index) => {
                    return (
                        <div
                            className="w-full py-5 mt-5 bg-gray-100 border rounded-lg shadow-md hover:bg-white"
                            key={index}>
                            <div className="flex justify-between px-5">
                                <div className="text-lg font-semibold text-purple-600 md:text-xl ">
                                    <span>
                                        {surah.nomor} : {ayat.nomorAyat}
                                    </span>
                                </div>
                                <span>
                                    <p className="mt-2 text-lg font-semibold text-purple-500 md:text-xl">
                                        {ayat.id}
                                    </p>
                                </span>
                            </div>
                            <hr className="my-2 border-b-2" />
                            <div className="leading-none">
                                <p className=" font-amiri p-5 text-3xl font-semibold leading-[70px] md:leading-[100px] text-right text-purple-800 md:text-4xl">
                                    {ayat.teksArab}
                                </p>
                                <p className="block px-5 mt-5 text-lg font-semibold leading-relaxed text-purple-700">
                                    {ayat.teksLatin}
                                </p>
                                <p className="px-5 mt-1 text-base italic font-semibold text-purple-400">
                                    {ayat.teksIndonesia}
                                </p>
                            </div>
                        </div>
                    )
                })}
                <ButtonNextAndprev data={surah} page="surah" />
            </div>
        </div>
    )
}
