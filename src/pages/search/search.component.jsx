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

  componentDidMount(){
    this.setState({keys: Object.keys(this.state.data)})
  }


  handleInput = (e) => {

    if (e.key === "Enter") {
      if (this.state.keys.includes(e.target.value) || e.target.value === "") {
        this.setState({ showResults: true, currency: e.target.value });
        e.target.value = "";
      }else{
        alert('Valor no presente. Presiona enter sin valor para ver todos');
      }
    }
  };

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
