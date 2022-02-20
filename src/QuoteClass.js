import React, { Component } from 'react';
import axios from 'axios';

export class QuoteClass extends Component {
    constructor(props) {
        super(props);
        this.state={
            quote:'',
            author: '',
            api: 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
        }
        this.getQuote=this.getQuote.bind(this);
    }
    getQuote = () =>{
        
        axios.get(this.state.api)
            .then(res => {
                const {quoteText, quoteAuthor}=res.data.data[0];
                this.setState({
                    quote: quoteText,
                    author: quoteAuthor
                })

            })
    }

    render() {
        const {quote,author} = this.state;
        return (
        <div>
            <h4>Click this button</h4>
            <button onClick={this.getQuote}>Get Quote</button>

            {quote && (<p>{quote}</p>)}
            {author && (<small>Quote by: {author}</small>)}

        </div>
        )
    }
}

export default QuoteClass