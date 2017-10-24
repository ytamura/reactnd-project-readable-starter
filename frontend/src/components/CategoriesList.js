import React, { Component } from 'react';

class CategoriesList extends Component {

  render() {
    const {categories} = this.props;

    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.path} className="category-list-item">
              {category.name}
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default CategoriesList;