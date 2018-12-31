import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Looks extends Component {

    componentDidMount(){
    const slide = document.querySelector('.slider-1');
    const slide2 = document.querySelector('.slider-2');
    const slide3 = document.querySelector('.slider-3');
    const slide4 = document.querySelector('.slider-4');
    const topArray =['images/b.jpg','images/bey4.jpg','images/bey5.png'];
    const bottomArray =['images/bey1.jpg','images/ivybottoms.jpg','images/ivypants.jpg'];
    const outerArray =['images/b4.jpg','images/ivycoat.jpg','images/jacket_lady.jpg'];
    const accArray =['images/b3.jpg','images/beenie.jpg','images/ivyhat.jpg'];

    let num = 0
    setInterval(()=> {
    if (num === topArray.length){
        num = 0;
    }
    slide.src = topArray[num];
    slide4.src = accArray[num];
    slide2.src = bottomArray[num];
    slide3.src = outerArray[num];

    num++;
    },3000)

    

}
    render() {
    return (

<div className = "grid_container">
<div className="looks">
<div className="look">
    <img className="slider slider-1" src= 'images/b.jpg' ></img>
    <div className="look_info">
    <p>TOPS</p>
    <Link to ="/looks" className="look_button">View LookBook</Link>
    </div>
</div>
<div className="look">
    <img className="slider slider-2" src= 'images/bey1.jpg' ></img>
    <div className="look_info">
    <p>BOTTOMS</p>
    <Link to ="/looks" className="look_button">View LookBook</Link>
    </div>
</div>
<div className="look">
    <img className="slider slider-3" src= 'images/b4.jpg' ></img>
    <div className="look_info">
    <p>OUTERWEAR</p>
    <Link to ="/looks" className="look_button">View LookBook</Link>
    </div>
</div>
<div className="look">
    <img className="slider slider-4" src= 'images/b3.jpg' ></img>
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