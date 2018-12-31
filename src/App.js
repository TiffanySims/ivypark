import React, { Component } from 'react';
import Home from './main/Home';
import Looks from './lookbook/Looks';
import Details from './lookbook/Detail';
import products from './reducers/Looks_reducer';
import Likes from './wishlist/Likes';

import{ BrowserRouter, Route,Switch} from 'react-router-dom';





class App extends Component {

  state={
    products,
    likes:[]
    
  }

  componentWillMount(){
        
    const storage = JSON.parse(localStorage.getItem('like'));
    
    // Restoring likes from the localStorage
    if (storage) this.state.likes = storage;
  }
  
  
  addLike = (product) => {
    
    const Liked = this.state.likes.findIndex(like => {
      return like.id === product.product_id 
  })
  if(Liked){
        const newLike ={
            id: product.product_id,
            image:product.image[0],
            title:product.title,
            price:product.price
        }
        
         
        
        this.setState({
         likes: [...this.state.likes,newLike]

     },() => {
      localStorage.setItem('like', JSON.stringify(this.state.likes))
     })
     
    
    }}


    deleteLike = (id) => {
      const newState = this.state.likes.filter(like => {
        return like.id !== id
        
      })
      this.setState({
        likes:newState
      }, () => {
        localStorage.setItem('like', JSON.stringify(this.state.likes))
      })
    }
    
       
  render() { 
   
  
    return (
      <BrowserRouter>
      <div >
        
      <Switch>
      
    <Route path="/wish" component={(props)=> <Likes {...props} likes={this.state.likes} deleteLike={this.deleteLike} />}/>
    <Route path="/looks" component={(props)=> <Looks {...props} products={this.state.products}/>}/>
      <Route path="/:id" component={(props)=> <Details {...props} products={this.state.products}addLike={this.addLike} />}/>
        <Route path="/" component={Home}/>
        </Switch>
        
      </div>
     
      </BrowserRouter>
    );
  }
}

export default App;
