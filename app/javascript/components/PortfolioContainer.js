import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'
import NavBar from './NavBar'
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
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

    handleSubmit = (e) => {
        e.preventDefault()

        let currency = this.state.active_currency
        let amount = this.state.amount

        axios.post("http://localhost:3000/calculate", {
            id: currency.id,
            amount: amount
        })
        .then((data) => {
            this.setState({
                amount: '',
                active_currency: null,
                portfolio: [...this.state.portfolio, data.data]
            })
        })
        .catch((err) => console.log(err))
        console.log(this.state.search_results)
    } 

    handleAmount = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const calSearch = this.state.active_currency ? 
        < Calculate  
            handleChange={this.handleAmount}
            handleSubmit={this.handleSubmit}
            active_currency={this.state.active_currency}
            amount={this.state.amount}    
        /> : 
        <Search 
            handleSelect={this.handleSelect} 
            searchResults={this.state.search_results} 
            handleChange={this.handleChange} 
                />
       
        return(
            <div>
                <div>
                    {calSearch},
                    < NavBar />
                </div>
                <div className="right">
                    <Portfolio portfolio={this.state.portfolio}/>
                </div>
            </div>
        )
    }
}

export default PortfolioContainer