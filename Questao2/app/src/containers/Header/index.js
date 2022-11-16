import React from 'react'
import './styles.css'
import TopBarText from '../../components/HeaderComponents/HeaderTopBar/TopBarText'
import TopBarLogo from '../../components/HeaderComponents/HeaderTopBar/TopBarLogo'
import TopBarButton from '../../components/HeaderComponents/HeaderTopBar/TopBarButton'
import {ReactComponent as Logotype1} from '../../components/HeaderComponents/svg/Vector.svg'
import {ReactComponent as Logotype2} from '../../components/HeaderComponents/svg/Vector-1.svg'
import {ReactComponent as Logotype3} from '../../components/HeaderComponents/svg/Vector-2.svg'
import {ReactComponent as Logotype4} from '../../components/HeaderComponents/svg/Vector-3.svg'


function Header() {
    return (
        <div className="Header">
            <div className='TopBar'>

                <div className='TopBarLogoDiv'>
                    <TopBarLogo />
                </div>

                <div className='TopBarTextDiv'>
                    <TopBarText text="Auctions" link="Auctions"/>
                    <TopBarText text="Roadmap" link="Roadmap"/>
                    <TopBarText text="Discover" link="Discover"/>
                    <TopBarText text="Community" link="Community"/>
                </div>

                <div className='TopBarButtonDiv'>
                    <a href='Contact'>
                        <TopBarButton buttonText="Contact" styles="transparent"/>
                    </a>
                    <a href='MyAccount'>
                        <TopBarButton buttonText="My account" styles="blue"/>
                    </a>
                </div>
            </div>

            <div className='HeaderResume'>
                <div className='MainTextHeader'>
                    <p className='HeaderSubText'>Non Fungible Tokens</p>
                    <p className='HeaderMainText'>A new NFT</p>
                    <p className='HeaderMainText'>Experience</p>
                    <p className='HeaderSubText'>Discover, collect and sell</p>
                </div>

                <div className='HeaderLogotypes'>
                    <Logotype1 />
                    <Logotype2 />
                    <Logotype3 />
                    <Logotype4 />
                </div>

            </div>
        </div>
    )
}

export default Header