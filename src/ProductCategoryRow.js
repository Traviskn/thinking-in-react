import React, { Component } from 'react';
import { string } from 'prop-types';

export default class ProductCategoryRow extends Component {
  static propTypes = {
    category: string,
  }

  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    );
  }
}
