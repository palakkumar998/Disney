import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <Link href="/"  >Click me</Link>
            <Image
                src="https://www.cdnlogo.com/logos/d/46/disney.svg"
                alt='disney logo'
                width={120}
                height={100}
                className='cursor-pointer' />
        </header>
    )
}

export default Header 
