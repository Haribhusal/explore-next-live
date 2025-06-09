"use client"

import Slider from 'react-slick'
import reviews from '@/reviews.json'
const Testimonials = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick}
                className="absolute -top-10 hover:text-green-600 cursor-pointer right-0"

            >Right</div>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className="absolute cursor-pointer hover:text-green-600 -top-10 right-10"
                onClick={onClick}
            >Left</div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        navigation: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className='py-10 max-h-[35vh] overflow-hidden'>

            <div className="max-w-7xl mx-auto">
                <h3 className='text-2xl font-bold mb-5'>Top Reviews</h3>
                <div className="slider-container relative">
                    <Slider {...settings}>
                        {reviews.map((review, i) => (
                            <article key={i} className='bg-gray-900 p-5 pt-10 rounded-md'>
                                <blockquote className='text-slate-500 mb-3 relative'>
                                    <span className='absolute text-4xl -top-5 text-green-600 z-10'>
                                        "
                                    </span>
                                    {review.message}
                                </blockquote>
                                <div className="user">
                                    <h5 className='font-bold text-xl'>
                                        {review.name}
                                    </h5>
                                    <p>
                                        {review.country}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonials