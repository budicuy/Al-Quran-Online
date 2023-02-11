import Link from 'next/link'

export default function CardHome(props) {
    return (
        <Link href={`/surah/${props.surah.nomor}`}>
            <div className="p-4 transition-all duration-300 bg-gray-100 rounded shadow-md cursor-pointer hover:bg-white shadow-purple-300 ">
                <h3 className="text-lg font-semibold ">
                    <div className="flex justify-between">
                        <span>
                            {props.surah.nomor}.{' '}
                            {props.surah.namaLatin}
                        </span>
                        <span>
                            {props.surah.jumlahAyat} ayat
                        </span>
                    </div>
                </h3>
                <hr className="border-b-1" />
                <p className="mt-5 text-5xl text-right ">
                    {props.surah.nama}
                </p>
                <p className="mt-5 font-semibold ">
                    {props.surah.arti}
                </p>
            </div>
        </Link>
    )
}
