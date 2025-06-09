import React from 'react'
import tours from '@/tours.json'
import Image from 'next/image'
import Link from 'next/link'
const TopDestinations = () => {
    return (
        <section>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-2xl font-bold mb-5'>Top Destinations</h3>
                <div className="destinations grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                    {tours.map((tour, idx) => (
                        <article key={idx} className='bg-gray-900 p-5 rounded-md group'>
                            <figure className='overflow-hidden rounded-md relative'>
                                <span className='absolute right-0 top-3 z-20 bg-green-600 px-3 py-1 rounded-s-full'>
                                    {tour.country}
                                </span>
                                <Image className='rounded-md group-hover:scale-110 transition-all' height={300} width={300} alt={tour.title} src={tour.image_url} />
                            </figure>

                            <div className="heading flex justify-between my-3 items-center">
                                <h3 className='font-bold group-hover:text-green-500 text-xl '>
                                    {tour.title}
                                </h3>
                                <div className="price">
                                    {tour.pricing}
                                </div>
                            </div>

                            <p className='text-slate-400'>
                                {tour.short_info}
                            </p>
                            <div className="buttons flex gap-3 items-center mt-5">
                                <Link href={`/tour-details/${tour.id}`}>
                                    <button className='btn btn-small btn-dim'>
                                        View More
                                    </button>
                                </Link>
                                <button>
                                    Book Now
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TopDestinations