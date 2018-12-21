import React, { Component } from 'react';
import Filter from './Filter';
import {Link} from 'react-router-dom';




class Shop extends Component {
    state = {
        
        filtered:this.props.products,
        color:'all',
        size:'all',
        price:'all',
        type:'all'
      }
    
    change = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    


    this.setState({
      [name]:value
    },
    () => {
      this.filterData();
    })

    }
    
    filterData = () => {
        var newData = this.props.products;
        if(this.state.color!=='all'){
             newData=newData.filter(product => {
                return this.state.color == product.colors
                      
              })
            }
              if(this.state.type!=='all'){
                newData=newData.filter(product => {
                   return this.state.type == product.type
                         
                 })
           

            }
            if(this.state.price!=='all'){
            
                    newData=newData.filter(product => {
                        return this.state.price >= product.price
                          
                
                    
                 })
                }
            this.setState({
                filtered:newData
            })
        }
         
      

  render() {
      let list = this.state.filtered.map(product => {
          return(


              <div className="product" key={product.product_id}>
              <Link to = {{ pathname: '/'+product.product_id}}>
                  <img className="product_image"src={product.image[0]} />
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
        
        
        <Filter change={this.change} />
            <div className="products">
                {list}
            </div>
        </div>
        </div>
    );
  }
}


export default Shop;
