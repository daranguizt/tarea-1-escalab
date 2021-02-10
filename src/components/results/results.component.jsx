import React from "react";
import ResultItem from "../result-item/result-item.component";
import "./results.styles.scss";

class Results extends React.Component {
  render() {
    const {data, currency} = this.props;
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
        {currency && currency.trim() !== ""
          ? data[
              currency
            ].serie.map(({ fecha, valor }, index) => (
              <ResultItem
                key={index}
                currency={currency.toUpperCase()}
                date={fecha.split("T")[0]}
                value={valor}
                type={data[currency].unidad_medida}
              />
            ))
          : Object.values(data).map((dataObj, index) => {
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
