import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Link from 'next/link'

export default function Detail({ data }) {
  const [surah, setSurah] = useState([])
  const [ayat, setAyat] = useState([])
  const [audio, setAudio] = useState([])
  const [loading, setLoading] = useState(true)
  const [surahSebelumnya, setSebelumnya] =
    useState([])
  const [surahSanjutnya, setlanjutnya] = useState(
    []
  )

  useEffect(() => {
    setSurah(data)
    setAyat(data.ayat)
    setAudio(data.audioFull)
    setSebelumnya(data.suratSebelumnya)
    setlanjutnya(data.suratSelanjutnya)

    setLoading(false)

    setTimeout(() => {
      document.querySelector('#audioPlayer').src =
        Object.values(data.audioFull)[0]
    }, 200)
  }, [data])

  console.log(data)

  const pengisiSuara = [
    'Abdullah Al Juhayni',
    'Abdul Muhsin Al Qasim',
    'Abdurrahman As Sudais',
    'Ibrahim Al Dossari',
    'Mishary Al Afasy',
  ]

  return (
    <div>
      <Head>
        <title>Surah {surah.namaLatin}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="grid items-center min-h-screen">
        {loading ? (
          <div className="flex justify-center w-full mt-5 md:mt-10">
            <svg
              className="w-10 h-10 text-purple-500 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          </div>
        ) : (
          <div className="container px-5 mt-5 mb-5 md:px-12">
            <div className="grid">
              <div className="p-4 bg-gray-100 border rounded-lg shadow-md md:p-8">
                <div className="text-center md:text-left">
                  <span className="text-lg font-semibold text-purple-600 md:text-left md:text-xl">
                    {surah.namaLatin} -{' '}
                    {surah.arti}
                  </span>
                  <span>
                    <p className="mt-2 text-lg font-semibold text-purple-500 md:text-xl">
                      {surah.tempatTurun} -{' '}
                      {surah.jumlahAyat} Ayat
                    </p>
                  </span>
                </div>
                <hr className="mt-3 border-b-2" />
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
                        document.querySelector(
                          '#pause'
                        )
                      const play =
                        document.querySelector(
                          '#play'
                        )
                      // add class hidden
                      pause.classList.add(
                        'hidden'
                      )
                      play.classList.remove(
                        'hidden'
                      )
                    }}>
                    {Object.keys(audio).map(
                      (key, index) => {
                        return (
                          <option
                            key={index}
                            className="text-xs bg-gray-100 hover:bg-purple-900 md:text-lg"
                            value={audio[key]}
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
                  <Button />
                </div>
              </div>
              {ayat.map((ayat, index) => {
                return (
                  <div
                    className="w-full py-5 mt-5 bg-gray-100 border rounded-lg shadow-md hover:bg-white"
                    key={index}>
                    <div className="flex justify-between px-5">
                      <div className="text-lg font-semibold text-purple-600 md:text-xl ">
                        <span>
                          {surah.nomor} :{' '}
                          {ayat.nomorAyat}
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
              <div className="flex justify-between p-3 mt-5 text-sm bg-gray-100 border rounded-lg shadow-md md:justify-center md:gap-5 md:text-lg hover:bg-white">
                {surahSebelumnya ? (
                  <Link
                    className="px-2 py-1 font-semibold text-white border rounded bg-green-600/80"
                    href={`/surah/${surahSebelumnya.nomor}`}>
                    ⬅ {surahSebelumnya.namaLatin}{' '}
                    - {surahSebelumnya.nomor} :{' '}
                    {surahSebelumnya.jumlahAyat}
                  </Link>
                ) : (
                  <span></span>
                )}
                {surahSanjutnya ? (
                  <Link
                    className="px-2 py-1 font-semibold text-white border rounded bg-blue-600/80"
                    href={`/surah/${surahSanjutnya.nomor}`}>
                    {surahSanjutnya.namaLatin} -{' '}
                    {surahSanjutnya.nomor} :{' '}
                    {surahSanjutnya.jumlahAyat} ➡
                  </Link>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const { id } = context.params

  const res = await axios.get(
    `https://equran.id/api/v2/surat/${id}`
  )
  const data = await res.data.data

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  const res = await axios.get(
    'https://equran.id/api/v2/surat'
  )
  const data = await res.data.data

  const paths = data.map((surah) => ({
    params: { id: surah.nomor.toString() },
  }))

  return { paths, fallback: false }
}
