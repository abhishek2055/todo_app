import React,{useState} from 'react'

const AddTodo = ({handleSubmit}) => {
    const [todo,setTodo] = useState();
    
  return (
    <div>
        <form onSubmit={(e)=>{
            handleSubmit(e,todo)
            setTodo(" ")
            }} action="">

      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default AddTodo
