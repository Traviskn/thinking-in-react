import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  static propTypes = {
    products: arrayOf(shape({
      name: string,
      category: string,
    })),
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
