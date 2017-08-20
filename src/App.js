import React, { Component } from 'react';
import './App.css';
import GiphyList from './components/GiphyList'
import SearchBar from './components/SearchBar'
import _ from 'lodash'

const API_KEY = "your_api_key_here"

class App extends Component {
  constructor() {
    super()

    this.state = {
      gifs: {}
    }
  }

  componentDidMount() {
    this.fetchGifs("danny tanner")
  }

  fetchGifs(searchTerm) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=24`)
    .then( res => res.json() )
    .then(json => {
      if(json.error) {
        alert("Error")
      } else {
        this.setState({
          gifs: json
        })
      }
    })
  }

  render() {
    const fetchGifs = _.debounce((searchTerm) => {this.fetchGifs(searchTerm)}, 200)

    if(!this.state.gifs.data) {
      return null
    } else {
      return (
        <div className="ui grid container">
          <SearchBar onChange={(searchTerm) => fetchGifs(searchTerm)} />

          <div className="ui grid">
            <GiphyList gifs={this.state.gifs.data}/>
          </div>
          <h5>Powered by GIPHY</h5>
        </div>
      );
    }
  }
}

export default App;
