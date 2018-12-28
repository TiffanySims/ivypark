import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Looks extends Component {

    render() {
    return (

<div className = "look_container">
<div className="looks">
<div className="look">
    <img className="slider" src= 'images/bey.jpg' ></img>
    <div className="look_info">
    <p>TOPS</p>
    <Link to ="/shop" className="look_button">View LookBook</Link>
    </div>
</div>
<div className="look">
    <img className="slider" src= 'images/bey1.jpg' ></img>
    <div className="look_info">
    <p>BOTTOMS</p>
    <Link to ="/shop" className="look_button">View LookBook</Link>
    </div>
</div>
<div className="look">
    <img className="slider" src= 'images/b4.jpg' ></img>
    <div className="look_info">
    <p>OUTERWEAR</p>
    <Link to ="/shop" className="look_button">View LookBook</Link>
    </div>
</div>
<div className="look">
    <img className="slider" src= 'images/b3.jpg' ></img>
    <div className="look_info">
    <p>ACCESSORIES</p>
    <Link to ="/shop" className="look_button">View LookBook</Link>
    </div>
</div>
</div>
</div>

    )
}
}
export default Looks;