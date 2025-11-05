import React, { useContext, useEffect, useState} from 'react'
import CreateBook from '../components/CreateBook'
import { NavLink } from 'react-router'
import { CartContext } from '../storage'

export default function BookPage() {

    const [cart, setCart] = useContext(CartContext)

    const [books, setBooks] = useState([])

    function addToCart(item){
        setCart(
            [
                ...cart,
                item
            ]
        )
    }


    useEffect(() => {
        
        async function getbooks(){
            const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
            const data = await resp.json()
            setBooks(data)
            console.log(data)

        }
        getbooks()

    }, [])

  return (
    <div>
        <h1 className="text-2xl text-center font-bold mb-7">Каталог книг</h1>

        <CreateBook />

        <div className='flex flex-wrap justify-center gap-6'>
        {
            books.map(book => (
                <div className='border rounded-2xl px-3 py-3 my-5 flex flex-col'>
                    <NavLink className="text-center cursor-pointer text-2xl font-bold" to={`${book.id}`} >{book.title}</NavLink>
                    <span>Кол-во страниц: {book.pageCount}</span>
                    <p>Описание: {book.description}</p>
                    <button onClick={() => addToCart(book)} className='bg-green-600 cursor-pointer text-white rounded-xl mb-2 py-1 mt-4'>Купить книгу</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}
