import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
    .then(handleResponse)
    .then((data) => {
      this.setState({ 
        currencies: data.currencies, 
        loading: false, 
      });
    })
    .catch((error) => {
      this.setState({ 
        error: error.erroMessage, 
        loading: false, 
      });
    });
  }

  renderChangePercent(percent) {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &uarr;</span>
    } else {
    return <span>{percent}</span>
    }
  }

  render() {
    const { loading, error, currencies } = this.state;

    // This will render only if loading state is set to true.
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    // This will render only an error message if error happens when fetching data from api.
    if (error) {
    return <div className="error">{error}</div>
    }

    return (
      <Table 
        currencies={currencies}
        renderChangePercent={this.renderChangePercent}
      />
    );
  }
}

export default List;