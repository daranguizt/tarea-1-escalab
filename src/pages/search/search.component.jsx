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
      const val = e.target.value.trim().toLowerCase();
      if (
        Object.keys(this.state.data).includes(val) ||
        e.target.value === ""
      ) {
        this.setState({ showResults: true, currency: val });
        e.target.value = "";
      } else {
        alert("Valor no presente. Presiona enter sin valor para ver todos");
      }
    }
  };

  render() {
    const {data, currency} = this.state;
    return (
      <div>
        <h1>This is the Search Page</h1>
        <input className="search-bar" onKeyPress={this.handleInput}></input>
        {this.state.showResults ? (
          <Results currency={currency} data={data} />
        ) : null}
      </div>
    );
  }
}

export default SearchPage;
