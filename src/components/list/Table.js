import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Table.css';

const Table = (props) => {
  const { currencies, renderChangePercent, history } = props;
  
return (
  <div className="tableContainer">
    <table className="mainTable">
      <thead className="tableHead">
        <tr>
          <th>CRYPTOCURRENCY</th>
          <th>PRICE</th>
          <th>MARKET CAP</th>
          <th>24H CHANGE</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        {currencies.map((currency) => (
          <tr 
            key={currency.id}
            onClick={() => history.push(`/currency/${currency.id}`)}
          >
            <td>
              <span className="tableRanking">{currency.rank}</span>
              {currency.name}
            </td>
            <td>
              <span className="tableDollarSign">$</span>
              {currency.price}
            </td>
            <td>
              <span className="tableDollarSign">$</span>
              {currency.marketCap}
            </td>
            <td>
              {renderChangePercent(currency.percentChange24h)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

Table.propTypes = {
  currencies: PropTypes.array.isRequired,
  renderChangePercent: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};


export default withRouter(Table);