import React, { Component } from 'react';
import Likes from './likes'




class Details extends Component {
 
  render() {
    
    const {id} = this.props.match.params;

    const productList =this.props.products.map(product => {
       if(product.product_id == id){
         
         const list = product.size.map(s => {
           return <li className="size" key={Math.random()}>{s}</li>
          })

        return (
        <div className="container product_details">
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
       
       <a className="submit" onClick={this.props.addLike}>Add To Wishlist</a>
       </div>
       </div>
        )
          
       }
       
     })
    

    return (
      
      <div >
      <h1 className="products_h1">IVY PARK</h1>
        
        <hr/>

      
      {productList}
    
      </div>
    )
  }
}

export default Details;
