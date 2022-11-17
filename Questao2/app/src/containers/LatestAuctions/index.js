import React from 'react'
import './styles.css'

import {useEffect, useState, useRef} from 'react'

function LatestAuctions() {
    const [data, setData] = useState([])
    const carousel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/carouselData.json').then((response) => response.json()).then(setData)
    }, [])

    if(!data || !data.length) {
        return null
    }

    const handleClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth/4

    }

    return ( 
        <div className='LatestMainDiv'>
            <p className='LatestDivTitle'>Latest live auctions</p>
            
            <div className='Carousel' ref={carousel}>
                {data.map((item) => {
                    const {id, title, price, time, peopleBidding, likes, itemImage, peopleBiddingImage1, peopleBiddingImage2, peopleBiddingImage3, peopleBiddingImage4} = item
                    return(
                        <div className='item' key={id}>
                            <div className='image'>
                                <img src={itemImage} alt={title} />
                            </div>
                            <div className='titleAndPrice'>
                                <span className='title'>{title}</span>
                                <div className="border">
                                    <span className='price'>{price} ETH</span>
                                </div>
                            </div>
                            <div className='time'>
                                <img src='http://localhost:3000/static/CarouselImages/time-left.svg' alt='clock vector'></img>
                                <span>{time} min left</span>
                            </div>
                            <hr className="dashed"></hr>
                            <div className='social'>
                                <div className='peopleImages'>
                                    <div className='Images'>
                                        <img src={peopleBiddingImage1} alt='' />
                                        <img src={peopleBiddingImage2} alt='' />
                                        <img src={peopleBiddingImage3} alt='' />
                                        <img src={peopleBiddingImage4} alt='' />
                                    </div>
                                    <span className='peopleBidding'>{peopleBidding} people are bidding</span>
                                </div>
                                <div className='likes'>
                                    <img src='http://localhost:3000/static/CarouselImages/likes.svg' alt='like vector'></img>
                                    <span>{likes}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={handleClick}><img src='http://localhost:3000/static/CarouselImages/chevron.svg' alt='chevron'></img></button>
        </div>
    )
}

export default LatestAuctions