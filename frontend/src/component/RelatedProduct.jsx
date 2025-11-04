import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'
import Card from './Card'

function RelatedProduct({ category, subCategory, currentProductId }) {
  let { products } = useContext(shopDataContext)
  let [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter(item => item.category === category)
      productsCopy = productsCopy.filter(item => item.subCategory === subCategory)
      productsCopy = productsCopy.filter(item => item._id !== currentProductId)
      setRelated(productsCopy.slice(0, 4))
    }
  }, [products, category, subCategory, currentProductId])

  return (
    <div className='my-32 md:my-10 md:px-16 px-6'>
      <div className='ml-4 lg:ml-20'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className='w-full mt-8 flex flex-wrap justify-center gap-12'>
        {related.map((item, index) => (
          <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
