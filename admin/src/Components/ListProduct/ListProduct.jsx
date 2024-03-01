import React from 'react'
import './ListProduct.css'
const ListProduct = () => {
  return (
    <div className='list-product'>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproduct">
          <hr/>
        </div>
    </div>
  )
}

export default ListProduct