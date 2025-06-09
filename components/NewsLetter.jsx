import React from 'react'

const NewsLetter = () => {
    return (
        <section className='py-20'>
            <div className="container text-center max-w-7xl mx-auto">
                <h3 className='text-5xl font-light'>
                    Stay updated with our packages, news and updates
                </h3>

                <form className='my-10 flex gap-3 justify-center'>
                    <input className='max-w-md bg-gray-800 px-10 py-4 rounded-md  w-full' type="text" placeholder='Enter your email' />
                    <button className='btn'>Get Updates</button>
                </form>
            </div>
        </section>
    )
}

export default NewsLetter