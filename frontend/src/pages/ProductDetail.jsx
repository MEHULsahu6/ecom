import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';

function ProductDetail() {
  let { productId } = useParams()
  let { products, currency, addtoCart, loading } = useContext(shopDataContext)
  let [productData, setProductData] = useState(null)

  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  useEffect(() => {
    const product = products.find(item => item._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image1)
      setSize('') // reset size selection
    }
  }, [productId, products])

  if (!productData) return <div className='opacity-0'></div>

  return (
    <div className='w-[99vw] min-h-[100vh] bg-[#EFE9E4] flex flex-col lg:flex-row pt-20 px-6 gap-8'>
      <div className='lg:w-1/2 flex flex-col lg:flex-row items-center gap-6'>
        <div className='lg:w-[20%] flex flex-col gap-4'>
          {[productData.image1, productData.image2, productData.image3, productData.image4].map((img, i) => (
            <div key={i} className='w-[50px] h-[50px] rounded-2xl overflow-hidden cursor-pointer border border-transparent hover:border-[#9B8C80] transition'>
              <img src={img} alt={`Thumb ${i}`} className='w-full h-full object-cover' onClick={() => setImage(img)} />
            </div>
          ))}
        </div>
        <div className='lg:w-[60%] border border-[#C8BDB3] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden'>
          <img src={image} alt={productData.name} className='w-full h-[400px] object-cover rounded-2xl' />
        </div>
      </div>

      <div className='lg:w-1/2 flex flex-col gap-5 text-[#0F0F0F]'>
        <h1 className='text-4xl font-bold'>{productData.name.toUpperCase()}</h1>
        <div className='flex items-center gap-1'>
          {[...Array(4)].map((_, i) => <FaStar key={i} className='text-yellow-400' />)}
          <FaStarHalfAlt className='text-yellow-400' />
          <p className='text-lg font-semibold'>(124)</p>
        </div>
        <p className='text-3xl font-semibold'>{currency} {productData.price}</p>
        <p className='text-lg font-semibold'>{productData.description}</p>

        <div className='flex flex-col gap-2'>
          <p className='text-xl font-semibold'>Select Size</p>
          <div className='flex gap-3'>
            {productData.sizes.map((s, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full border border-[#9B8C80] ${s === size ? 'bg-[#0F0F0F] text-[#C8BDB3]' : 'bg-[#F5F2EF] text-[#0F0F0F] hover:bg-[#E6D9CF]'} transition`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            className='mt-4 px-6 py-3 bg-[#0F0F0F] text-[#C8BDB3] font-semibold rounded-full border border-transparent hover:border-[#9B8C80] transition'
            disabled={!size}
            onClick={() => addtoCart(productData._id, size)}
          >
            {loading ? <Loading /> : "Add to Cart"}
          </button>
        </div>

        <hr className='my-4 border-[#9B8C80]' />

        <div className='text-sm text-[#6B655B] leading-relaxed'>
          <p>100% Original Product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      <div className='w-full min-h-[70vh] bg-[#EFE9E4] mt-12 flex flex-col'>
        <div className='flex border-b border-[#C8BDB3] px-6'>
          <p className='py-3 text-[#0F0F0F] font-semibold mr-6 cursor-pointer'>Description</p>
          <p className='py-3 text-[#0F0F0F] font-semibold cursor-pointer'>Reviews (124)</p>
        </div>

        <div className='bg-white border border-[#C8BDB3] rounded-2xl text-[#6B655B] p-6 mt-4 mx-6'>
          <p>
            Upgrade your wardrobe with this stylish slim-fit cotton shirt, crafted from breathable, high-quality fabric offering all-day comfort and effortless style.
          </p>
        </div>

        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />
      </div>
    </div>
  )
}

export default ProductDetail

