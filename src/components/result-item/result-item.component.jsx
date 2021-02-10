import React, { Fragment } from "react";
import "./result-item.styles.scss";

class ResultItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currency, date, value, type} = this.props;
    return (
      <Fragment>
        <div className="result-item">
          <div>{currency}</div>
          <div>{date}</div>
          <div>{value}</div>
          <div>{type}</div>
        </div>
      </Fragment>
    );
  }
}

export default ResultItem;
