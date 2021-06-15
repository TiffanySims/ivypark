import React, { useContext } from "react";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import NavBar from "../Main/Nav";
import { GlobalContext } from "../../Context/GlobalProvider";

const Looks = () => {
  const { filtered } = useContext(GlobalContext);
  let results = filtered.length;

  let list = filtered.map((product) => {
    return (
      <div className='product' key={product.product_id}>
        <Link to={{ pathname: "/" + product.product_id }}>
          <img className='product_image' src={product.image[0]} alt='model' />
        </Link>
        <div className='product_info'>
          <p className='product_title'>{product.title}</p>
          <p className='product_price'>${product.price}</p>
        </div>
      </div>
    );
  });
  return (
    <div className='flex__container'>
      <NavBar />

      <div className='product_container '>
        <h1 className='products_h1 hidden'>IVY PARK</h1>
        <hr />

        <Filter />
        <p className='results'>{results} results</p>
        <div className='products'>{list}</div>
      </div>
    </div>
  );
};

export default Looks;
