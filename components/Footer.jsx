import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 py-5 md:py-10'>
            <div className="max-w-7xl mx-auto flex gap-3">
                <div className="logo w-full md:w-3/12">
                    Logo
                </div>
                <div className="links flex flex-col gap-3 w-full md:w-3/12">
                    <div className="heading">Useful Links</div>
                    <Link href={'/'}>Explore Tours</Link>
                    <Link href={'/'}>Our Packages</Link>
                    <Link href={'/'}>Why choose us?</Link>
                    <Link href={'/'}>Contact Us</Link>
                </div>
                <div className="links flex flex-col gap-3 w-full md:w-3/12">
                    <div className="heading">Top Destinations</div>
                    <Link href={'/'}>Thailand Tour</Link>
                    <Link href={'/'}>Bali Tour</Link>
                    <Link href={'/'}>Singapore Tour</Link>
                    <Link href={'/'}>Malaysiya Tour</Link>
                </div>
                <div className="links flex flex-col gap-3 w-full md:w-3/12">
                    <div className="heading">Best Selling Packages</div>
                    <Link href={'/'}>Couple</Link>
                    <Link href={'/'}>Group</Link>
                    <Link href={'/'}>Family</Link>
                    <Link href={'/'}>Single</Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer