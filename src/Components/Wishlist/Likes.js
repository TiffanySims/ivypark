import React, { useContext } from "react";

import NavBar from "../Main/Nav";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalProvider";

const Likes = () => {
  const { productList, likes, deleteLike } = useContext(GlobalContext);

  const results = likes.length;
  const favoriteList = productList.slice(3, 6);

  const list = likes.map((like) => {
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
          <span className='delete' onClick={() => deleteLike(like.id)}>
            x
          </span>
        </div>
      </div>
    );
  });
  const likedDefault = favoriteList.map((like) => {
    return (
      <div className='liked_item ' key={like.product_id}>
        <Link to={{ pathname: "/" + like.product_id }}>
          <div className='liked_image'>
            <img src={like.image[0]} alt='clothes' />
          </div>
        </Link>
        <div className='liked_info'>
          <p className='liked_title'>{like.title}</p>
          <p className='liked_price'>${like.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div className='flex__container'>
      <NavBar />

      <div className='liked'>
        <div className='liked_container'>
          <h2 className='liked_heading'>MY FAVORITES</h2>

          <hr />

          <div>
            <p className='liked_results'>items: {results}</p>

            {likes.length === 0 ? (
              <div>
                <div className='liked_default'>
                  <h2 className='liked_default-text-1'>
                    Your wishlist is empty
                  </h2>
                  <h2 className='liked_default-text-2'>
                    KICK IT OFF WITH ONE OF THESE FAVORITES!
                  </h2>
                </div>
                <div className='liked_list'>{likedDefault} </div>
              </div>
            ) : (
              <div className='liked_list'>{list} </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likes;
