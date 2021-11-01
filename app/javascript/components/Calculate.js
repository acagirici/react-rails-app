import React, { Component } from 'react'

const Calculate = (props) => {
    return(
        <div>
            <h1>
                Let's calculate your {props.active_currency.name}  
                ({props.active_currency.currency_symbol})
            </h1>
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label>Enter Amount</label>
                    <input onChange={this.props.handleChange} type='text' name='name' placeholder='How Much do you want to calculate?' value={this.props.amount} className='field'> </input>
                </div>
                <div className="form-group">
                    <input type="submit" className="calculate-btn" value="Calculate My Total" />
                </div>
            </form>
        </div>
    )
}

export default Calculate