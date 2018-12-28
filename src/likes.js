import React, { Component } from 'react';

import NavBar from './Nav'


class Likes extends Component {

   
    
       
       
render () {
   
       
         var list = this.props.likes.map(like => {
            return(
                <div className="list_item " key={like.id}>
        <div className="liked_image">
        <img src={like.image}/>
        </div>
        <div className="liked_info">
        <p className= "liked_title">{like.title}</p>
        <p className= "liked_price">${like.price}</p>
        <span className="delete" onClick={() => this.props.deleteLike(like.id)}>Remove from Wishlist</span>
        </div>

       
        </div>
        
            )
         })
        
    
    return( 
        <div className="container" >
            <NavBar />
        
        <div className="likes">
        <h1 className="products_h1">IVY PARK</h1>

        <hr/>
        <h2 className="wishlist">Add to your Wishlist...</h2>
        <div >
        <div className="list">
        {list}
        </div>
        </div>
        </div>
      
      
      </div>
    )
}




}
export default Likes