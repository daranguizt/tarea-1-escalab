import React from "react";
import ResultItem from "../result-item/result-item.component";
import "./results.styles.scss";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      currency: props.currency,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data, currency: nextProps.currency });
  }

  render() {
    return (
      <div className="results">
        <ResultItem
          key="top"
          currency="Nombre"
          date="Fecha"
          value="Valor"
          type="Unidad de medida"
        />
        <hr></hr>
        {this.state.currency && this.state.currency.trim() !== ""
          ? this.state.data[
              this.state.currency
            ].serie.map(({ fecha, valor }, index) => (
              <ResultItem
                key={index}
                currency={this.state.currency}
                date={fecha.split("T")[0]}
                value={valor}
                type={this.state.data[this.state.currency].unidad_medida}
              />
            ))
          : Object.values(this.state.data).map((dataObj, index) => {
              return (
                <ResultItem
                  key={index}
                  currency={dataObj.codigo.toUpperCase().replace("_", " ")}
                  date={dataObj.fecha.split("T")[0]}
                  value={dataObj.valor}
                  type={dataObj.unidad_medida}
                />
              );
            })}
      </div>
    );
  }
}

export default Results;
