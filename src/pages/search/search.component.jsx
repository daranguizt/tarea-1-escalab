import React from "react";
import SEARCH_DATA from "./search.data";
import Results from "../../components/results/results.component";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: SEARCH_DATA,
      currency: null,
      showResults: false,
    };
  }

  handleInput = (e) => {
    if (e.key === "Enter") {
      this.setState({ showResults: true, currency: e.target.value });
      e.target.value = "";
    }
  };

  componentDidUpdate(){
    console.log('component did update');
  }

  render() {
    return (
      <div>
        <h1>This is the Search Page</h1>
        <input className="search-bar" onKeyPress={this.handleInput}></input>
        {this.state.showResults ? (
          <Results currency={this.state.currency} data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default SearchPage;
