import React,{useState} from 'react'
import AddTodo from './components/AddTodo'
import ViewTodoList from './components/ViewTodoList'

const App = () => {

  const [todoList,setTodoList] = useState([]);

  const handleSubmit = (e,todo)=>{
    e.preventDefault()
    setTodoList([...todoList, todo]);
    

}
  
  return (
    <div>
      <AddTodo handleSubmit={handleSubmit}/>
      <ViewTodoList todoList={todoList}/>

     {/* 
      <ViewTodoList />
      <Todo />
      
      */}
    </div>
  )
}

export default App

