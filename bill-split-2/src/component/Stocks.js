
import React from 'react';
import { stockData } from "./data.js";

function Stocks() {
  return (
    <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.user +
                " , " +
                data.item }
            </div>
          );
        })}
      </div>
  )
}

export default Stocks