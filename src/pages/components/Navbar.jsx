import { useEffect, useState } from 'react'

export default function Navbar() {
  const [nav, setNav] = useState([])

  const navItems = [
    { name: 'Home', link: '/', icon: '🏠' },
    {
      name: 'About',
      link: '/about',
      icon: '👨‍💻',
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: '📞',
    },
    {
      name: 'Blog',
      link: '/blog',
      icon: '📒',
    },
  ]

  useEffect(() => {
    setNav(navItems)
  }, [])

  return (
    <div>
      <header
        aria-label="Site Header"
        className="bg-purple-800 shadow-lg">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex md:items-center md:gap-12">
              <a
                className="block text-white/80"
                href="/">
                <span className="text-2xl font-bold font-quicksand">
                  📖 Al - Qur'an
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className="text-lg font-semibold text-white/75 hover:text-white">
                        {item.icon} {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="hidden md:flex sm:gap-4">
                <a
                  className="rounded-md bg-red-400 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/">
                  🚪 Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-blue-600 hover:bg-blue-300 px-5 py-2.5 text-sm font-medium text-white"
                    href="/">
                    📝 Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
