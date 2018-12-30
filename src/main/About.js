import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {

    return(
<div className="about_container">
    <div className="about_text">
   <span className="bold">  IVY PARK </span> AW16 IS HERE
Now in its second season, Ivy Park is the
activewear label co-founded by Beyoncé. 
Uniting technical sportswear with fashion-led
casualwear, the new collection combines 
clean lines, urban prints and graphic logos
with a relaxed, menswear-inspired silhouette.
All in a rich colour palette of metallic silver,
burgundy and muted tonal blues.
    </div>
<div className="about_locations">
<h4 className="about_heading">Where to find Ivy Park</h4>

    <ul>
    <li className="about_link" >Nordtroms</li>
    <li className="about_link" >TopShop</li>
    <li className="about_link" >PacSun</li>
    <li  className="about_link">Beyonce</li>
</ul>
</div>
</div>
    )
}
export default About