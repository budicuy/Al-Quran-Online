import { useEffect } from 'react'
import Button from './Button'
import ButtonNextAndprev from './ButtonNextAndprev'

export default function CardTafsir({ tafsir }) {
    const namaSurah = tafsir.namaLatin
    const nomorSurah = tafsir.nomor

    const pengisiSuara = [
        'Abdullah Al Juhayni',
        'Abdul Muhsin Al Qasim',
        'Abdurrahman As Sudais',
        'Ibrahim Al Dossari',
        'Mishary Al Afasi',
    ]

    useEffect(() => {
        document.querySelector('#audioPlayer').src =
            Object.values(tafsir.audioFull)[0] || ''
    }, [tafsir])

    return (
        <>
            <div className="container px-5 mt-5 mb-5 md:px-12">
                <div className="grid">
                    <div className="p-4 bg-white border rounded shadow-md md:p-8">
                        <div className="text-center">
                            <div className="text-lg font-semibold text-purple-600 md:text-xl">
                                {tafsir.namaLatin} • {tafsir.arti} <br />
                                <span className="block">
                                    {tafsir.tempatTurun} {tafsir.jumlahAyat} •{' '}
                                    {tafsir.nama}
                                </span>
                                <div className="flex flex-wrap justify-center gap-5 mt-4 md:justify-between">
                                    <select
                                        className="w-full p-2 overflow-hidden text-xs font-semibold text-purple-700 bg-white border-2 border-purple-300 rounded-lg md:w-1/2 md:max-w-none md:text-lg focus:right-2 ring-purple-700"
                                        onChange={(e) => {
                                            const audio =
                                                document.querySelector(
                                                    '#audioPlayer'
                                                )
                                            audio.src = e.target.value
                                            const pause =
                                                document.querySelector('#pause')
                                            const play =
                                                document.querySelector('#play')
                                            // add class hidden
                                            pause.classList.add('hidden')
                                            play.classList.remove('hidden')
                                        }}>
                                        {Object.keys(tafsir.audioFull).map(
                                            (key, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        className="text-xs bg-gray-100 hover:bg-purple-900 md:text-lg"
                                                        value={
                                                            tafsir.audioFull[
                                                                key
                                                            ]
                                                        }
                                                        id={`optionAudio${index}`}>
                                                        {pengisiSuara[index]}
                                                    </option>
                                                )
                                            }
                                        )}
                                    </select>
                                    <audio
                                        controls
                                        id="audioPlayer"
                                        className="hidden"></audio>
                                    <Button
                                        data={tafsir}
                                        buttonName="Surah"
                                        page="surah"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {tafsir.tafsir.map((tafsir, index) => {
                        return (
                            <div
                                className="w-full py-5 mt-5 bg-white border rounded-lg shadow-md "
                                key={index}>
                                <div className="flex justify-between px-5">
                                    <div className="text-lg font-semibold text-purple-600 md:text-xl ">
                                        <span>
                                            {nomorSurah} : {tafsir.ayat} -{' '}
                                            {namaSurah}
                                        </span>
                                    </div>
                                </div>
                                <hr className="my-2 border-b-2" />
                                <div className="leading-none">
                                    <p className="px-5 mt-1 text-base italic font-semibold text-justify text-gray-800">
                                        {tafsir.teks}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <ButtonNextAndprev data={tafsir} page="tafsir" />
        </>
    )
}
