import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Stars from '../components/stars'
import NotFoundPage from './NotFoundPage'

export default function ProductPage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function loadProduct() {
            const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await resp.json()
            setProduct(data)
        }

        loadProduct()
    }, [])

    if (!product) {
        return <NotFoundPage />
    }

    return (
        <div className='flex flex-col gap-6'>
            <button
                className='w-fit border px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors'
                onClick={() => navigate(-1)}
            >
                Назад
            </button>

            <div className='flex flex-wrap gap-8'>
                <img
                    className='w-full max-w-sm object-contain'
                    src={product.image}
                    alt={product.title}
                />

                <div className='flex flex-col gap-4 max-w-xl'>
                    <h1 className='text-3xl font-bold'>{product.title}</h1>
                    <div className='flex items-center gap-2'>
                        <Stars rating={product.rating.rate} />
                        <span className='text-sm text-gray-600'>{product.rating.rate.toFixed(1)}</span>
                    </div>
                    <p className='text-2xl font-semibold'>{product.price}$</p>
                    <p className='text-gray-600'>Категория: {product.category}</p>
                    <p className='leading-relaxed'>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

