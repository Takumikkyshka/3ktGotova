import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import Stars from '../components/stars'

export default function Kt3Page() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProductsFromApi(){
            const resp = await fetch('https://dummyjson.com/products')
            const data = await resp.json()
            setProducts(data.products)
        }
        getProductsFromApi()
    }, [])

    console.log(products)

    function deleteProduct(id){
        setProducts([
            ...products.filter(productid => productid.id != id)
        ])
    }

  return (
    <div>
        <div className='flex flex-wrap justify-between gap-4'>
            {
                products.map(product => (
                    <div onDoubleClick={() => deleteProduct(product.id)} className='border rounded-xl px-4 py-5 w-[300px]'>
                        <img className='w-[250px] h-[350px] object-cover' src={product.images[0]}></img>
                        <NavLink className='font-bold'>{product.title}</NavLink>
                        <p>{product.price}$</p>
                        <div className='flex items-center gap-2 mt-1'>
                            <Stars rating={product.rating} />
                            <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
