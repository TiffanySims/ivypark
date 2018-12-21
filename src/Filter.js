import React, { Component } from 'react';
import products from './reducers/shop_reducer';




class Filter extends Component {


  render() {


    return (
        <div className="filter_container">
      <div className="filter">
       

        <div className="product_cost">
        <h4>Type</h4>
       <select onChange={this.props.change}  name="type" >
           <option value="all">All</option>
           <option value="top">Tops</option>
           <option value="bottom">Bottoms</option>
           <option value="outerwear">Outerwear</option>
           <option value="accessories">Accessories</option>
           <option value="footwear">Footwear</option>
       </select>
       </div>

       <div className="product_cost">
        <h4>Price</h4>
       <select onChange={this.props.change}  name="price" >
           <option value="all">All</option>
           <option value="0">under $30</option>
           <option value="60">under $60</option>
           <option value="100">under $100</option>
           <option value="200">under $200</option>
       </select>
       </div>
      
       <div className="product_cost">
        <h4>Color</h4>
       <select onChange={this.props.change}  name="color" >
           <option value="all">All</option>
           <option value="black">Black</option>
           <option value="white">White</option>
           <option value="grey">Grey</option>
           <option value="blue">Blue</option>
           <option value="green">Green</option>
       </select>
       </div>
      </div>
      </div>
    );
  }
}

export default Filter;
