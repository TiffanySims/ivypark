import React, { Component } from "react";

import NavBar from "../Nav";
import { Link } from "react-router-dom";

class Likes extends Component {
  render() {
    var results = this.props.likes.length;
    var list = this.props.likes.map((like) => {
      return (
        <div className='liked_item ' key={like.id}>
          <Link to={{ pathname: "/" + like.id }}>
            <div className='liked_image'>
              <img src={like.image} alt='clothes' />
            </div>
          </Link>
          <div className='liked_info'>
            <p className='liked_title'>{like.title}</p>
            <p className='liked_price'>${like.price}</p>
            <span
              className='delete'
              onClick={() => this.props.deleteLike(like.id)}
            >
              x
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className='flex__container'>
        <NavBar />

        <div className='liked'>
          <div className='liked_container'>
            <hr />

            <h2 className='liked_heading'>Add to your Wishlist...</h2>
            <div>
              <div className='liked_list'>
                <p className='liked_results'>items: {results}</p>
                {list}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Likes;
