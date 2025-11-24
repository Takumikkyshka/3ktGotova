import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import Stars from '../components/stars'

const url = 'https://fakestoreapi.com/products'

export default function Kt3Page() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const resp = await fetch(url)
            const data = await resp.json()
            setProducts(data)
        }

        loadProducts()
    }, [])

  return (
    <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold text-left'>Все товары</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product => (
                    <article key={product.id} className='border rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow'>
                        <img className='w-full h-60 object-contain' src={product.image} alt={product.title} />
                        <NavLink to={`/product/${product.id}`} className='font-semibold text-lg hover:underline text-left'>
                            {product.title}
                        </NavLink>
                        <p className='text-xl font-bold text-left'>{product.price}$</p>
                        <div className='flex items-center gap-2'>
                            <Stars rating={product.rating.rate} />
                            <span className='text-sm text-gray-600'>{product.rating.rate.toFixed(1)}</span>
                        </div>
                    </article>
                ))
            }
        </div>
    </div>
  )
}
