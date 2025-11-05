import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

export default function UsersPage() {

    const [isShown, setIsShown] = useState(false)

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsersFromApi(){
            
            const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Users')
            const data = await resp.json()
            setUsers(data)
            console.log(data)

        }
        getUsersFromApi()

    }, [])

    async function deleteUserByID(id){
        const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users/${id}`, {
                method: 'Delete'
        })
            
        if(resp.ok){
            setUsers([
                ... 
                users.filter(usersid => usersid.id != id)
            ])
        }

    }

    async function createUserFromAPI(e){
        e.preventDefault()
        const formData = new FormData(e.target)

        console.log(console.log(formData.get('userName')))

        const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: formData.get('username'),
                password: formData.get('password')
            })
        })
        const data = await resp.json()
        console.log(data)

        if(resp.ok){
            setUsers([
                ...users,
                {id: Date.now(), userName: formData.get('username'), password: formData.get('password')}
            ])
        }

    }

  return (
    <div>
        <div>
            <button onClick={() => setIsShown(!isShown)}>Создать юзера</button>
            {
                isShown && (
                    <div>
                        <h3>Добавить пользователя</h3>
                
                        <form onSubmit={(e) => createUserFromAPI(e)}>
                            <input type="text" name="username" placeholder='Имя пользователя'></input>
                            <input type="text" name="password" placeholder='пароль'></input>
                            <button>Подтвердить</button>
                        </form>
                    </div>
                )
            }
        </div>
        <div className='flex flex-wrap gap-5'>
            {
                users.map(user => (
                    <div className='border rounded-md py-5 px-5'>
                        <NavLink className="text-md font-bold cursor-pointer" to={`${user.id}`}>{user.userName}</NavLink>
                        <p>{user.password}</p>
                        <button onClick={() => deleteUserByID(user.id)} className='cursor-pointer border rounded-md px-12 py-1'>Удалить</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
