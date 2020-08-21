import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] }; // an array

  componentDidMount() {
    this.onSearchSubmit("nature");
  }

  onSearchSubmit = async (term) => {
    console.log(term);

    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui container">
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
