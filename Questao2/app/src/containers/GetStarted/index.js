import React from 'react'
import './styles.css'

import TopBarButton from '../../components/HeaderComponents/HeaderTopBar/TopBarButton'

function GetStarted() {
    return(
        <div className='dash'>
            <div className='GetStarted'>
                <div className='textsAndButtons'>
                    <div className='texts'>
                        <span className='overline'>OVERLINE</span>
                        <span className='title'>Sapien ipsum</span>
                        <span className='title'>scelerisque</span>
                        <span className='title'>convallis fusce</span>
                        <span className='subTitle'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</span>
                    </div>
                    <div className='buttons'>
                        <div className='buttonStyle'>
                            <TopBarButton buttonText="Get Started" styles="blue"/>
                        </div>
                        <div className='buttonStyle'>
                            <TopBarButton buttonText="Learn more" styles="transparent"/>
                        </div>
                    </div>
                </div>
                <div className='image'>
                    <div className='img1'>
                        <img src='http://localhost:3000/static/GetStartedImages/Image-1.png' alt='image1 getstarted'></img>
                    </div>
                    <div className='img2'>
                        <img src='http://localhost:3000/static/GetStartedImages/Image.png' alt='image2 getstarted'></img>
                    </div>
                </div>
            </div>
            <hr className="dashed"></hr>
        </div>
    )
}

export default GetStarted