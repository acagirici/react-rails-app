import React, { Component } from 'react'

const Calculate = (props) => {
    return(
        <div>
            <h1>
                Let's calculate your {props.active_currency.name}  
                ({props.active_currency.currency_symbol})
            </h1>
        </div>
    )
}

export default Calculate