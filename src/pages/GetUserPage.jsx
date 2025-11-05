import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'    

export default function GetUserPage() {

    const {id} = useParams()

    const [user, setUser] = useState(null)

    useEffect(() => {

        async function getUserByIdFromApi(){

            const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Users/${id}`)
            const data = await resp.json()
            setUser(data)
            console.log(data)
        }
        getUserByIdFromApi()

    }, [])

  return (
    <div>
        {
            user && (
                <div className='flex flex-col border rounded-md mx-auto my-auto text-center gap-3 py-3 max-w-sm'>
                    <h1>{user.userName}</h1>
                    <p>{user.password}</p>
                </div>
            )
        }
    </div>
  )
}
