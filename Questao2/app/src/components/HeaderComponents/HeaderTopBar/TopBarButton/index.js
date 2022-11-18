import React from 'react'
import './styles.css'

function TopBarButton(props) {
    return (
        <div className={props.styles}>
            <p>{props.buttonText}</p>
        </div>
    )
}

export default TopBarButton

