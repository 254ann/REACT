import React from 'react'
import ProductComponent from './product.component'

const ProductListComponent = ({products}) => {
  return (
    <div>
      {products.map((productObj) =>(
        <ProductComponent key={productObj.id}product={productObj}/>
      ))}
    </div>
  )
}

export default ProductListComponent
