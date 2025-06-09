import React from 'react'
import tours from '@/tours.json'
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import ExtraInfo from '@/components/ExtraInfo';

import tours from '@/tours.json'; // adjust path based on actual location

export async function generateStaticParams() {
    return tours.map(tour => ({
        tourId: tour.id.toString(), // make sure id exists and is string or converted
    }));
}

const page = async ({ params }) => {
    const { tourId } = await params;

    const filteredResult = tours?.filter((tour) => tour.id === tourId)
    const currentTour = filteredResult[0];
    console.log('opening current tour', currentTour)

    // console.log("opening", tourId)


    return (
        <section className='py-10'>
            <div className="conatiner max-w-7xl mx-auto flex gap-10">
                <div className="tour-details w-full sm:w-3/5">
                    <article className='text-xl'>
                        <figure className=''>
                            <Image className='w-full rounded-md' src={currentTour.image_url} height={300} width={300} alt={currentTour.title} />
                        </figure>
                        <div className="sub-heading mt-5">
                            <strong>
                                {currentTour.country}
                            </strong>
                        </div>
                        <h3 className='text-5xl font-bold my-3'>
                            {currentTour.title}
                        </h3>
                        <p className='text-slate-600'>
                            {currentTour.short_info}
                        </p>
                        <div className="pricing">
                            {currentTour.pricing}
                        </div>
                    </article>
                    <ExtraInfo />
                </div>
                <div className="tour-booking-form w-full sm:w-2/5">

                    <div className="booking-form p-5 border border-gray-600 bg-gray-900 rounded-md">
                        <h3 className='text-3xl font-black mb-3'> {currentTour.title} Booking Form</h3>
                        <BookingForm />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default page