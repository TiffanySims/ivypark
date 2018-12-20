import React, { Component } from 'react';
import Filter from './Filter';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {selectItem} from './action'



class Shop extends Component {


  render() {
      let list = this.props.products.map(product => {
          return(


              <div className="product" key={product.product_id}>
              <Link to = {{ pathname: '/'+product.product_id}}>
                  <img className="product_image"src={product.image[0]} onClick={() => this.props.selectItem(product)}/>
                  </Link>
                  <div className="product_info">
                      <p className="product_title">{product.title}</p>
                      <p className="product_price">${product.price}.00</p>
                  </div>
              </div>

          )
      })
    return (
        <div>
        <h1 className="products_h1">IVY PARK</h1>
        
        <hr/>
        <div className="container">
        
        
        <Filter />
            <div className="products">
                {list}
            </div>
        </div>
        </div>
    );
  }
}

function mapStateToProps(state){
    return {
        products: state.products
    }
}
    
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ selectItem: selectItem }, dispatch);
  }
export default connect(mapStateToProps , mapDispatchToProps)(Shop);
