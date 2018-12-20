import React, { Component } from 'react';
import {connect} from 'react-redux';




class Details extends Component {

  render() {
    const {product} = this.props.active;

    const list = product.size.map(s => {
      return <li className="size" key={Math.random()}>{s}</li>
     })
    return (
      <div >
      <h1 className="products_h1">IVY PARK</h1>
        
        <hr/>
      <div className ="container product_details">
      <div className="left">
      <div className="images">
       <img className="detail_main-photo" src = {product.image[0]} />
       <img className="detail_second-photo" src = {product.image[1]} />
       <img className="detail_third-photo" src = {product.image[2]} />
       </div>
      </div>

      <div className="right">
      <h2 className="detail_heading">{product.title}</h2>
     
      <p className="detail_description">{product.description}</p>
      <div className="detail_size">
      <ul>
        Avaliable sizes: {list}
      </ul>
      <p className="detail_colors" >Avaliable colors: {product.colors}</p>
      </div>
     <p className="detail_price">${product.price}</p>
      
      <a className="submit">Add To Wishlist</a>
      </div>
      </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    active: state.active
  }
}
export default connect(mapStateToProps)(Details);
