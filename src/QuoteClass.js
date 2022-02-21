import React, { Component } from 'react';
import axios from 'axios';

export class QuoteClass extends Component {
    constructor(props) {
        super(props);
        this.state={
            quote:'',
            author: '',
            genre:'',
            api: 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
        }
        // this.getQuote=this.getQuote.bind(this);
    }
    getQuote = () =>{
        
        axios.get(this.state.api)
            .then(res => {
                const {quoteText, quoteAuthor,quoteGenre}=res.data.data[0];
                this.setState({
                    quote: quoteText,
                    author: quoteAuthor,
                    genre: quoteGenre
                })

            })
    }

    render() {
        const {quote,author,genre} = this.state;
        return (
            <div class="card">
                <div class="card-header">
                    <label>Quote for today -> </label>
                    <button className='btn btn-warning' onClick={this.getQuote}>Get Quote</button>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        {quote && (<p>{quote}</p>)}
                        <footer class="blockquote-footer">
                            {author && (<small>Quote by: {author} in Genre </small>)} 
                            <cite title="Source Title">{genre && (<small>{genre}</small>)}</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>


        )
    }
}

export default QuoteClass