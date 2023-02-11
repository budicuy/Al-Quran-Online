import { useEffect, useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

export default function NavbarMenu() {
  const [navbar, setNavbar] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])

  const navItems = [
    { name: 'Home', link: '/', icon: '🏠' },
    {
      name: 'Tafsir',
      link: '/tafsir',
      icon: '📜',
    },
    {
      name: 'About',
      link: '/about',
      icon: '👨‍💻',
    },
    { name: 'Blog', link: '/blog', icon: '📒' },
  ]

  return (
    <div>
      <nav
        className={`w-full shadow shadow-purple-800/60 rounded-b-xl text-gray-200 ${
          scroll
            ? 'apply fixed top-0 z-50 transition-all duration-300 bg-purple-900/70'
            : 'bg-purple-900'
        }`}
        id="navbar">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-2xl font-bold md:text-3xl">
                  📖 EQuran ID
                </h2>
              </a>
              <div className="md:hidden">
                <Hamburger
                  toggled={navbar}
                  toggle={setNavbar}
                  rounded
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center transition-all duration-300 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar
                  ? '-translate-x-0 block md:relative'
                  : '-translate-x-full md:translate-x-0 absolute left-0  md:relative'
              }`}>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 font-semibold text-gray-200 transition-all duration-300 rounded md:text-xl hover:text-purple-800 hover:bg-gray-200/50 ">
                    <a href={item.link}>
                      {item.icon} {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
