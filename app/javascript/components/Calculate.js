import React, { Component } from 'react'

const Calculate = (props) => {
    return(
        <div>
            <h1>
                Let's calculate your {props.active_currency.name}  
                ({props.active_currency.currency_symbol})
            </h1>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label>Enter Amount</label>
                    <input onChange={props.handleChange} type="tex" name="amount" placeholder="How Much do you want to calculate?" value={props.amount} className='field' />
                </div>
                <div className="form-group">
                    <input type="submit" className="calculate-btn" value="Calculate My Total" />
                </div>
            </form>
        </div>
    )
}

export default Calculate