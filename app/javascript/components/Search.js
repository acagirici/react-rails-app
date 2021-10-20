import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div>
                <h1>Cryptocurrency Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for your Currency</label><br/>
                        <input onChange={this.props.handleChange} type="text" name="name" placeholder="Ex: Bitcoin, Ethereum, Litecoin..." value={this.props.name} className="input-field"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search