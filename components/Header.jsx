import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='bg-gray-900 py-3'>
            <div className="container max-w-7xl mx-auto flex items-center justify-between gap-3">
                <div className="logo">
                    Logo
                </div>
                <nav className='space-x-5'>
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About us</Link>
                    <Link href="/our-services">Services</Link>
                    <Link href="/contact-us">Contact us</Link>
                </nav>
                <button className='btn btn-primary'>Book Now</button>
            </div>
        </header>
    )
}

export default Header