import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'

class PortfolioContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleChange(e){
        axios.post("http://localhost:3000/search", {
            search: e.target.value
        })
        .then((data) => {
            this.setState({
                search_results: [...data.data.currencies]
            })
        })
        .catch((err) => console.log(err))
        console.log(this.state.search_results)
    }

    handleSelect = (curr, e) => {
        e.preventDefault()
    
        const activeCurrency = this.state.search_results.find( item => item.id == curr.id)
    
        this.setState({
          active_currency: activeCurrency,
          search_results: []
        })
      }

    render() {
        const calSearch = this.state.active_currency ? 
        < Calculate 
            active_currency={this.state.active_currency} 
                /> : 
        <Search 
            handleSelect={this.handleSelect} 
            searchResults={this.state.search_results} 
            handleChange={this.handleChange} 
                />

        return(
            <div>
                {calSearch}
            </div>
        )
    }
}

export default PortfolioContainer