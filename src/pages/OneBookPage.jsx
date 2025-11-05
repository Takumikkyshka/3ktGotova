import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function OneBookPage() {

    const {id} = useParams()

    const [book, setBook] = useState(null)

    useEffect(() => {
        
        async function onebook(){
            const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
            const data = await resp.json()
            setBook(data)
        }
        onebook()

    }, [])

  return (
    <div className="my-5">
        {
            book && (
                <div className='flex flex-col mx-auto border rounded-3xl px-5 py-4 gap-3 max-w-2xl'>
                    <h1 className='text-center text-2xl font-bold'>{book.title}</h1>
                    <span>Кол-во страниц: {book.pageCount}</span>
                    <p><b>Описание:</b> {book.description}</p>
                    <p><b>Краткое содержание:</b> {book.excerpt}</p>
                    <p>{book.publishDate}</p>
                </div>
            )
        }
    </div>
  )
}
