import "./SearchBar.css";

import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); // keeps the form from submitting automatically

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui container">
          <h1>Photo Searcher</h1>
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <div className="ui icon input">
                <i id="Searchicon" className="search icon"></i>
                <input
                  type="text"
                  placeholder="Enter search term"
                  id="search"
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })}
                />
              </div>
              <button className="search-button" onClick={this.onFormSubmit}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
