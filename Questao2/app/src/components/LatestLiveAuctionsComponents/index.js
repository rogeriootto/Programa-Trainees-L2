import React from 'react'
import './styles.css'


function LatestLiveAuctionsComponents(props) {
    return (
        <div className='LatestAuction'>
            <img src={props.itemImage} alt="itemImage"></img>
            <p>{props.itemName}</p>
            <p>{props.itemPrice}</p>
            <p>{props.itemTimeLeft} min left</p>
            <p>{props.itemPeopleBidding} people are bidding</p>
            <p>{props.itemLikes}</p>
        </div>
    )
}

export default LatestLiveAuctionsComponents