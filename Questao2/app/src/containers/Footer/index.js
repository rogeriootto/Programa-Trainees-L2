import React from 'react'
import './styles.css'

import TopBarButton from '../../components/HeaderComponents/HeaderTopBar/TopBarButton'

function Footer() {
    return (
        <div className='Footer'>

            <div className='logoAndSupport'>
                <div className='logo'>
                    <img src='http://localhost:3000/static/FooterImages/Sygnet.svg' alt='logo'></img>
                    <img src='http://localhost:3000/static/FooterImages/NFTMarket.svg' alt='logoName'></img>
                </div>
                <div className='support'>
                    <span>Support</span>
                    <span>Term of service</span>
                    <span>License</span>
                </div>
            </div>

            <hr className="dash"></hr>

            <div className='links'>
                <div className='linksText'>
                    <span>Auctions</span>
                    <span>Roadmap</span>
                    <span>Discover</span>
                    <span>Community</span>
                </div>
                <div className='button'>
                    <TopBarButton buttonText="My account" styles="blue"/>
                </div>
                <div className='socialMedia'>
                    <img src='http://localhost:3000/static/FooterImages/smedia1.svg' alt='face'></img>
                    <img src='http://localhost:3000/static/FooterImages/smedia2.svg' alt='linkedin'></img>
                    <img src='http://localhost:3000/static/FooterImages/smedia3.svg' alt='git'></img>
                    <img src='http://localhost:3000/static/FooterImages/smedia4.svg' alt='twitter-RIP'></img>
                    <img src='http://localhost:3000/static/FooterImages/smedia5.svg' alt='instagram'></img>
                </div>
            </div>

            <hr className="dash"></hr>

            <div className='newsletter'>
                <div className='text'>
                    <span>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </span>
                </div>
                <div className='emailInput'>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}

export default Footer