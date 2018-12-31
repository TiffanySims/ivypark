import React, { Component } from 'react';
import Filter from '../lookbook/Filter';
import {Link} from 'react-router-dom';
import NavBar from '../Nav'



class Looks extends Component {
    state = {
        
        filtered:this.props.products,
        color:'all',
        size:'all',
        price:'all',
        type:'all',
        sortBy:'asc'
      }

      componentWillMount(){
          let products = this.props.products.sort((a,b ) => {
              return a.price - b.price
          })
          this.setState({
              products
          })
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
                if(this.state.sortBy ==='dec'){
                    newData = newData.sort((a,b) => {
                        return b.price - a.price;
                    })
                }
                if(this.state.sortBy ==='asc'){
                    newData = newData.sort((a,b) => {
                        return a.price - b.price;
                    })
                }
            this.setState({
                filtered:newData
            })
        }
         
      

  render() {
      let results = this.state.filtered.length;

      let list = this.state.filtered.map(product => {
          return(


              <div className="product" key={product.product_id}>
              <Link to = {{ pathname: '/'+product.product_id}}>
                  <img className="product_image"src={product.image[0]} />
                  </Link>
                  <div className="product_info">
                      <p className="product_title">{product.title}</p>
                      <p className="product_price">${product.price}</p>
                  </div>
              </div>

          )
      })
    return (

        <div className="container">
            <NavBar />
        
            <div className="looks_container">
        <h1 className="products_h1">IVY PARK</h1>
        
        <hr/>
        
        
        
        <Filter change={this.change} />
        <p className="results">{results} results</p>
            <div className="products">

                {list}
            </div>
        </div>

        </div>
    );
  }
}


export default Looks;
