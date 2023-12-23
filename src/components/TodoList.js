import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState("");

  const update = (todo) => {
    setUpdatedText(todo.text)
    if(document.getElementById(todo.id).classList.contains('hidden')){
      document.getElementById(`${todo.id}span`).classList.add('hidden');
      document.getElementById(todo.id).classList.remove('hidden');
    } else{
      const id = todo.id
      dispatch(updateTodo({updatedText, id}))
      document.getElementById(`${todo.id}span`).classList.remove('hidden');
      document.getElementById(todo.id).classList.add('hidden');
    }
  };

  return (
    <div className="">
      <table className="w-[100%]">
        <tr>
          <th className="text-xl">Todo-Item</th>
          <th className="text-xl">Actions</th>
        </tr>

        {todos.map((todo) => (
          <tr className="border-2 border-gray-400">
            <td className="w-[85%] bg-gray-300 p-2">
              <span
              id={`${todo.id}span`} 
              className="">
                {todo.text}
              </span>
              <input 
              className="w-[85%] bg-gray-300 p-2 border-2 border-gray-800 focus:outline-none hidden" 
              type="text" 
              id={todo.id}
              value={updatedText}
              onChange={(e)=>setUpdatedText(e.target.value)} />
            </td>
            <td className="bg-gray-500">            
              <button
                className="border-2 border-red-800 bg-red-600 text-white font-semibold rounded-md p-2 mx-2 active:bg-red-400"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <BsFillTrashFill />
              </button>
              <button
                className="border-2 border-gray-800 bg-gray-600 text-white font-semibold rounded-md p-2 mx-2 active:bg-gray-400"
                onClick={() => update(todo)}
              >
                <BsFillPencilFill />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TodoList;
