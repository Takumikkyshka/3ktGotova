import React, { useContext } from 'react'
import { CartContext } from '../storage'
import { NavLink } from 'react-router'

export default function CartPage() {

    const [cart, setCart] = useContext(CartContext)

  return (
    <div>
        
        <div className='flex flex-wrap justify-center gap-6'>
            {
                cart.map(book => (
                    <div className='border rounded-2xl px-3 py-3 my-5 flex flex-col'>
                        <NavLink className="text-center cursor-pointer text-2xl font-bold" to={`/books/${book.id}`} >{book.title}</NavLink>
                        <span>Кол-во страниц: {book.pageCount}</span>
                        <p>Описание: {book.description}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
