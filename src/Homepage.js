import React, { useRef } from 'react'
import week0 from './data/week0.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const slideshow = useRef()

    const settings = {
        dots: false,
        infinite: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const picthumb = week0.map((item, idx) => {
        return (
            <div key={idx}>
                <img onClick={() => {slideshow.current.slickGoTo(idx)}} alt='build details' src={`${process.env.PUBLIC_URL}/img/${item.path}`} />
            </div>
        )
    })
    const picslide = week0.map((item, idx) => {
        return (
            <div key={idx}>
                <img alt='build details' src={`${process.env.PUBLIC_URL}/img/${item.path}`} />
                <div className="desc">{item.desc}</div>
            </div>
        )
    })

    return (
        <>
            <header>
                <h1>1987 Honda CRX Si Swap</h1>
                <h2>CRX Si 1.5 to 2nd Gen Integra 1.6 Browntop Swap</h2>
                <h3>Summer 2006</h3>
            </header>
            <div className="content">
                <div className="thumbs">
                    {picthumb}
                </div>
                <div className="slideshow">
                    <Slider ref={slideshow} {...settings}>
                        {picslide}
                    </Slider>
                </div>
            </div>
        </>
    )
}