import React from 'react';
import TodoItem from './TodoItem'

const style = { 
	width: '40%', 
	margin: '0 auto' 
}

const Todos = ({ todos }) => {
  return (
		<div style={style}>
			{todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
		</div>
	)
}

export default Todos;