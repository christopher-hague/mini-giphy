import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchBarChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    console.log("SearchBar state: ", this.state)
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input
              type="text"
              placeholder="Search for all the gifs..."
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
