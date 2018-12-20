import React, { Component } from 'react';




class Filter extends Component {
  render() {
    return (
        <div className="filter_container">
        <div className="filter_title">Filter</div>
      <div className="filter">
       <h4>Product Type</h4>
       <div className="product_type">

        <label className="label">Tops
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Bottoms
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Outerwear
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Accessories
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Footwear
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
       </div>

        <div className="product_cost">
        <h4>Price</h4>
       <select>
           <option>0-$29</option>
           <option>$30-$59</option>
           <option>$60-$99</option>
           <option>$100-$150</option>
           <option>$150+</option>
       </select>
       </div>

        <div className="sizes">
        <h4>Size</h4>
        <label className="label">S
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">M
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">L
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">XL
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">One Size
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
      
        </div>

        <div className="product_colors">
        <h4>Color</h4>
        <label className="label">Black
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">White
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Grey
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Red
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Blue
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Green
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Yellow
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        <label className="label">Orange
        <input type="checkbox" />
        <span className="checkmark"></span>
        </label>
        </div>
        </div>
      </div>
    );
  }
}

export default Filter;
