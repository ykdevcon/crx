import React, { useRef, useState } from 'react'
import Pic from './data/pic.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const [category, setCategory] = useState(0)
    const slideshow = useRef()

    const settings = {
        dots: false,
        infinite: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const handleCategory = (cat) => {
        setCategory(cat)
        slideshow.current.slickGoTo(0)
    }

    const picthumb = Pic.map((item, index) => {
        // Select which portion to return
        if (index === category) {
            return (
                item.list.map((pic, idx) => {
                    return (
                        <div key={idx}>
                            <img onClick={() => {slideshow.current.slickGoTo(idx)}} alt='build details' src={`${process.env.PUBLIC_URL}/img/${pic.path}`} />
                        </div>
                    )
                })  
            )  
        } else {
            return null
        }
    })

    const picslide = Pic.map((item, index) => {
        // Select which portion to return
        if (index === category) {
            return (
                item.list.map((pic, idx) => {
                    return (
                        <div key={idx}>
                            <img alt='build details' src={`${process.env.PUBLIC_URL}/img/${pic.path}`} />
                            <div className="desc">{item.desc}</div>
                        </div>
                    )
                })  
            )  
        } else {
            return null
        }
    })

    return (
        <>
            <header>
                <h1>1987 Honda CRX Si Swap</h1>
                <h2>CRX Si 1.5 to 2nd Gen Integra 1.6 Browntop Swap</h2>
                <h3>Summer 2006</h3>
            </header>
            <nav>
                <div onClick={() => {handleCategory(0)}}>Week 0</div>
                <div onClick={() => {handleCategory(1)}}>Week 1</div>
            </nav>
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