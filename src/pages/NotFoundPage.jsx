import React from 'react'
import { NavLink } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className='flex flex-col gap-4 items-start'>
      <h1 className='text-4xl font-bold'>404</h1>
      <p>Страница не найдена. Вернитесь к списку товаров.</p>
      <NavLink
        to='/products'
        className='border px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors'
      >
        Перейти к товарам
      </NavLink>
    </div>
  )
}

