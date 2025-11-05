import React, { useState } from 'react'

export default function CreateBook() {
    
    const [isShown, setIsShown] = useState(false)

    async function createBook(e){
        e.preventDefault()
        const formData = new FormData(e.target)

        console.log(formData.get('title'))

        const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:   JSON.stringify({
                "title": formData.get('title'),
                "description": formData.get('description'),
                "pageCount": formData.get('pages'),
                "excerpt": formData.get('excerpt'),
                "publishDate": formData.get('date')
            })
        })
        const data = await resp.json()
        console.log(data)
    }

  return (
    <div>

        <div className='text-right'>
            <button onClick={() => {setIsShown(!isShown)}} className='border rounded-md border-sky-500 py-1 px-2'>{isShown ? 'Отменить' : 'Создать книгу'}</button>
        </div>

        {
            isShown && (
                <div>
                    <h3 className='text-md font-bold text-center'>Добавить книгу</h3>
                    <form onSubmit={(e) => {createBook(e)}} className='flex flex-col max-w-[500px] mx-auto gap-5 mt-5'>
                        <input required name='title' className='border rounded-md border-sky-600 px-2 py-1' type="text" placeholder='Название' />
                        <textarea required name='description' className='border rounded-md border-sky-600 px-2 py-1' placeholder='Описание'></textarea>
                        <input required name='pages' className='border rounded-md border-sky-600 px-2 py-1' type='number' placeholder='Количество страниц' />
                        <textarea required name='excerpt' className='border rounded-md border-sky-600 px-2 py-1' placeholder='Отрывок'></textarea>
                        <input required name='date' className='border rounded-md border-sky-600 px-2 py-1' type="datetime-local" />
                        <button className='border rounded-md border-sky-600 px-2 py-1'>Подтвердить</button>
                    </form>
                </div>
            )
        }
    </div>
  )
}
