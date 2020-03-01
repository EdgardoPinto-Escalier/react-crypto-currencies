import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    const { page } = this.state;

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
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
      <div>
        <Table 
          currencies={currencies}
          renderChangePercent={this.renderChangePercent}
        />

        <Pagination />
      </div>
    );
  }
}

export default List;