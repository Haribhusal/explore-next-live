import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='min-h-[60vh] flex items-center'>
            <div className="container max-w-7xl mx-auto flex items-center gap-3">
                <div className="text-info flex flex-col gap-5 items-start">
                    <h2 className='text-5xl font-black'>Explore Bali</h2>
                    <p className='text-gray-300 text-xl w-full md:w-4/6'>Bali is one of the best place to visit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim distinctio saepe dolorum quibusdam libero! Quam.</p>
                    <div className="flex gap-5">
                        <button className='btn btn-dim'>View More</button>
                        <button className='btn btn-border'>Book Now</button>
                    </div>
                </div>
                <div className="tour-image">
                    <Image className='rounded-md' width={1000} alt='bali' height={600} src={'https://images.pexels.com/photos/2711640/pexels-photo-2711640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection