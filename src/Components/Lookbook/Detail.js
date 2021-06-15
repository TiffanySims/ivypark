import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalProvider";

const Details = () => {
  const { productList, addLike } = useContext(GlobalContext);
  const { id } = useParams();

  const products = productList.map((product) => {
    if (product.product_id == id) {
      const list = product.size.map((s) => {
        return (
          <li className='size' key={Math.random()}>
            {s}
          </li>
        );
      });

      return (
        <div className='product_details ' key={product.product_id}>
          <div className='left'>
            <div className='detail_images'>
              <img className='detail_main-photo' src={product.image[0]} />
              <img className='detail_second-photo' src={product.image[1]} />
              <img className='detail_third-photo' src={product.image[2]} />
            </div>
          </div>

          <div className='right'>
            <div className='detail_top'>
              <h2 className='detail_heading'>{product.title}</h2>
              <p className='detail_description'>{product.description}</p>
            </div>
            <div className='detail_middle'>
              <div className='detail_size'>
                <ul>Avaliable sizes: {list}</ul>
              </div>
              <p className='detail_colors'>
                Avaliable colors: {product.colors}
              </p>
            </div>
            <div className='detail_bottom'>
              <p className='detail_price'>${product.price}</p>
              <div className='detail_button'>
                <button
                  className='wishlist_button'
                  onClick={() => addLike(product)}
                >
                  Add To Wishlist
                </button>

                <Link className='wishlist_view' to='/wish'>
                  View Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <h1 className='products_h1'>IVY PARK</h1>

      <hr />

      {products}
    </div>
  );
};

export default Details;
