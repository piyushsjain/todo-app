import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todoSlice'

function AddTodo() {
  const [input, setInput] = useState()
  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    dispatch(addTodo(input))  
    setInput('')
  }

  return (
    <div className='mb-[5vh]'>
        <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a todo k'
        className='w-[80%] h-[43px] border-2 bg-gray-400 border-blue-800 focus:outline-none font-semibold'
        />

        <button
        onClick={handleClick}
        className='px-4 border-2 h-[43px] ml-1 w-[19%] bg-blue-400 border-blue-800 text-white font-semibold'
        >Add Todo</button>
    </div>
  )
}

export default AddTodo