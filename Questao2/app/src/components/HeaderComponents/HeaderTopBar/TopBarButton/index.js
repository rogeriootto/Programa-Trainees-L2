import React from 'react'
import './styles.css'

function TopBarButton(props) {
    return (
        <p className={props.styles}>{props.buttonText}</p>
    )
}

export default TopBarButton

