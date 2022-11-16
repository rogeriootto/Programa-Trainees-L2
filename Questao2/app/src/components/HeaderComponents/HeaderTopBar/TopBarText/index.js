import React from 'react'
import './styles.css'

function TopBarText(props) {
    return (
        <a className='TopBarLink' href={props.link}>
            <p className='TopBarText'>{props.text}</p>
        </a>
    )
}

export default TopBarText