import Link from 'next/link'

export default function Button() {
 return (
  <div>
   <div className="flex justify-end gap-2 md:gap-5 ">
    <button
     className="buttonAudio"
     id="play"
     onClick={() => {
      const audio = document.querySelector(
       '#audioPlayer'
      )
      audio.play()
      const pause =
       document.querySelector('#pause')
      const play = document.querySelector('#play')
      // add class hidden
      pause.classList.remove('hidden')
      play.classList.add('hidden')
     }}>
     ⏯ Play
    </button>
    <button
     id="pause"
     className="hidden buttonAudio"
     onClick={() => {
      const audio = document.querySelector(
       '#audioPlayer'
      )
      audio.pause()
      const pause =
       document.querySelector('#pause')
      const play = document.querySelector('#play')
      // add class hidden
      pause.classList.add('hidden')
      play.classList.remove('hidden')
     }}>
     ⏸ Pause
    </button>
    <div className="flex items-center justify-center px-4 py-2 font-bold text-white bg-red-800 rounded">
     <Link href="/">Tafsir</Link>
    </div>
   </div>
  </div>
 )
}
