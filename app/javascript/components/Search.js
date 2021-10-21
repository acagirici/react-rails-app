import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)

    }

    render() {
        const searchResults = this.props.searchResults.map(curr => 
        <li key={curr.id}><a href="#"> <span>{curr.name}</span> <span>({curr.currency_symbol})</span> </a></li>)
        return(
            <div>
                <h1>Cryptocurrency Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for your Currency</label><br/>
                        <input onChange={this.props.handleChange} type="text" name="name" placeholder="Ex: Bitcoin, Ethereum, Litecoin..." value={this.props.name} className="input-field"/>
                    </div>
                    <div className="currency-list">
                        {searchResults}
                    </div>
                </form>
            </div>
        )
    }
}

export default Search