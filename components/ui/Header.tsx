import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './ThemeToggler'

function Header() {
    return (
        <header>
            <Link href="/"  >Click me</Link>
            <Image
                src="https://www.cdnlogo.com/logos/d/46/disney.svg"
                alt='disney logo'
                width={120}
                height={100}
                className='cursor-pointer' />
            <div className='flex space-x-2 ' >
                {/* {/* genreDropdown */}
                {/* searchBox input */}

                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header 
