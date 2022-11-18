import React from 'react'
import './styles.css'

function Statistics () {
    return (
        <div className='Statistics'>
            <div className='item'>
                <img src='http://localhost:3000/static/StatisticImages/Vector-2.svg' alt='vectorUsers'></img>
                <span className='statistic'>300k</span>
                <span className='nameOfStatistic'>Users Active</span>
            </div>
           <div className='item'>
                <img src='http://localhost:3000/static/StatisticImages/Group.png' alt='vectorUsers'></img>
                <span className='statistic'>52,5k</span>
                <span className='nameOfStatistic'>Artworks</span>
           </div>
           <div className='item'>
                <img src='http://localhost:3000/static/StatisticImages/Vector-1.svg' alt='vectorUsers'></img>
                <span className='statistic'>17,5k</span>
                <span className='nameOfStatistic'>Artists</span>
           </div>
           <div className='item'>
                <img src='http://localhost:3000/static/StatisticImages/Vector.svg' alt='vectorUsers'></img>
                <span className='statistic'>35.58</span>
                <span className='nameOfStatistic'>ETH Spent</span>
           </div>
        </div>
    )
}

export default Statistics