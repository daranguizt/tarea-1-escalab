import React, { Fragment } from "react";
import "./result-item.styles.scss";

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currency: props.currency,
      date: props.date,
      value: props.value,
      type: props.type,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      currency: nextProps.currency,
      value: nextProps.value,
      type: nextProps.type,
    });
  }

  render() {
    return (
      <Fragment>
        <div className="result-item">
          <div>{this.state.currency}</div>
          <div>{this.state.date}</div>
          <div>{this.state.value}</div>
          <div>{this.state.type}</div>
        </div>
      </Fragment>
    );
  }
}

export default ResultItem;
