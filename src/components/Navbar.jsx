import { Pivot as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NavbarMenu() {
    const [navbar, setNavbar] = useState(false)
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    const navItems = [
        { name: 'Home', link: '/', target: '' },
        {
            name: 'About',
            link: '/',
            target: '',
        },
        {
            name: 'Github',
            link: 'https://github.com/budicuy',
            target: 'blank',
        },
        {
            name: 'Kumpulan Doa',
            link: '/',
            target: '',
        },
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
                        <div className="flex items-center justify-between py-1 md:py-5 md:block">
                            <Link href="/">
                                <div className="flex justify-center space-x-4 text-xl font-bold md:text-3xl">
                                    <img
                                        src="/logo.webp"
                                        className="h-8 md:h-10 filter"
                                        alt=""
                                    />{' '}
                                    <span>MyQuran</span>
                                </div>
                            </Link>
                            <div className="md:hidden">
                                <Hamburger
                                    toggled={navbar}
                                    toggle={setNavbar}
                                    rounded
                                    label="Show menu"
                                    size={25}
                                    duration={0.5}
                                    hideOutline={true}
                                    color="skyblue"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center transition-all duration-300  md:block md:pb-0 md:mt-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}>
                            <ul className="items-center justify-center py-2 space-y-1 md:space-x-4 md:flex md:space-y-0">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className="block"
                                        target={item.target}>
                                        <li className="p-2 font-semibold text-gray-200 transition-all duration-300 rounded md:text-xl hover:text-white hover:bg-gray-200/50 ">
                                            {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
