import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className='filter_container'>
        <div className='filter'>
          <div className='filter_select'>
            <h4 className='filter_select-h4'>Type:</h4>
            <select onChange={this.props.change} name='type'>
              <option value='all'>All</option>
              <option value='top'>Tops</option>
              <option value='bottom'>Bottoms</option>
              <option value='outerwear'>Outerwear</option>
              <option value='accessories'>Accessories</option>
              <option value='footwear'>Footwear</option>
            </select>
          </div>

          <div className='filter_select'>
            <h4 className='filter_select-h4'>Price:</h4>
            <select onChange={this.props.change} name='price'>
              <option value='all'>All</option>
              <option value='30'>$30 &amp; under</option>
              <option value='60'>$60 &amp; under</option>
              <option value='100'>$100 &amp; under</option>
              <option value='200'>$200 &amp; under</option>
            </select>
          </div>

          <div className='filter_select'>
            <h4 className='filter_select-h4'>Color:</h4>
            <select onChange={this.props.change} name='color'>
              <option value='all'>All</option>
              <option value='black'>Black</option>
              <option value='white'>White</option>
              <option value='grey'>Grey</option>
              <option value='blue'>Blue</option>
              <option value='green'>Green</option>
            </select>
          </div>
          <div className='filter_select'>
            <h4 className='filter_select-h4'>Sort:</h4>
            <select onChange={this.props.change} name='sortBy'>
              <option value='all'>All</option>
              <option value='asc'>Low to High</option>
              <option value='dec'>High to Low</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
