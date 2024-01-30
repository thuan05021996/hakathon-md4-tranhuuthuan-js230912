import { useEffect, useState } from 'react'

import './App.css'
import publicAxios from './config/pulicAxios'

interface Todo {
  id: number
  name: string
  status: number
}

function App() {
  const [listTodo, setListTodo] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [flag,setFlag] = useState<Boolean>(false)

const getlistTodo = async () =>{
  try {
    const res = await publicAxios.get('/api/v1/todo')
    setListTodo(res.data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  getlistTodo()
},[flag])

console.log(name)
// thêm
const addNewtodo = async () => {
  try {
    const res = await publicAxios.post('/api/v1/todo', {
      name
    })
    setFlag(!flag)
    alert(res.data.message)
  } catch (error) {
    console.log(error)
  }
}
//  xoá
const handleDelete = async (id :number) => {
  try {
    const res = await publicAxios.delete(`/api/v1/todo/${id}`)
    setFlag(!flag)
    
  } catch (error) {
    console.log(error)
  }
}
const handleUpdate = async (todo : Todo) => {
  try {
    const res = await publicAxios.put(`/api/v1/todo/${todo.id}`, 
      todo
    )
    setFlag(!flag)
    
  } catch (error) {
    console.log(error)
  }
}
  return (
    <>
         <div className="container">
        <div className="top">
          <h2>Todo List</h2>
          <p>Get! thing done. one item at a item</p>
        </div>
        <ul>
          
           
           {listTodo.map((todo) => (
                <li
               
                style={{ textDecoration: todo.status == 1 ? "line-through" : "" }}
              >
                {todo.name}
              
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => handleUpdate(todo)}
                ></i>
                <i
                  className="fa-regular fa-trash-can"
                 onClick={()=>handleDelete(todo.id)}
                />
              </li>
           ))}
          
   
        </ul>
        <div className="center">
          <p>Move done items at the end?</p>
        </div>
        <div className="button">
          <h3>Add to the todolist</h3>
          <div className="form-group">
            <input 
            onChange={(e) => setName(e.target.value)}
            type="text" />
            <button className='btn'
            onClick={addNewtodo}
            >
              ADD ITEM
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
