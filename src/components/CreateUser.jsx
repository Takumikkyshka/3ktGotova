import React, { useEffect, useState } from 'react'

export default function CreateUser() {

    const [isShown, setIsShown] = useState(false)

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

    }

    

  return (
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
  )
}
