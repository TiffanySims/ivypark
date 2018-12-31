import React, { Component } from 'react';

import NavBar from '../Nav'
import {Link} from 'react-router-dom';
import Footer from '../Footer';


class Likes extends Component {

   
    
       
       
render () {
   
         var results = this.props.likes.length;
         var list = this.props.likes.map(like => {
            return(
         
         <div className="liked_item " key={like.id}>
         <Link to ={{ pathname: '/'+like.id}}>
        <div className="liked_image">
        <img src={like.image}/>
        </div>
        </Link>
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
        <div className="wishList_list">
        <p className="likes_results">items: {results}</p>
        {list}
        </div>
        <Footer/>
        </div>
        </div>
      
      
      </div>
    )
}




}
export default Likes