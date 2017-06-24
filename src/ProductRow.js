import React, { Component } from 'react';
import { shape, string, bool, } from 'prop-types';

export default class ProductRow extends Component {
  static propTypes = {
    product: shape({
      name: string,
      price: string,
      stocked: bool,
    }),
  }

  render() {
    const name = this.props.product.stocked ? (
      this.props.product.name
    ) : (
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
