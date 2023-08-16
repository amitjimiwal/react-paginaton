import React from 'react'
import { userInterface } from '../interface/userInterface'
import { useNavigate } from 'react-router-dom'

const User :React.FC<userInterface>= ({id,avatar,email,first_name,last_name}) => {
     const navigate=useNavigate();
  return (
    <div className='flex items-center gap-4 p-4 m-2 border-2 border-black cursor-pointer' key={id} onClick={()=>{
     navigate(`/users/${id}`)
}}>
      <div className='rounded-full'>
         <img src={avatar} className='rounded-full'/>
      </div>
      <div>
          <h1 className='text-black font-extrabold'>{first_name} {last_name}</h1>
          <p className='text-gray-500 '>{email}</p>
      </div>
    </div>
  )
}

export default User
