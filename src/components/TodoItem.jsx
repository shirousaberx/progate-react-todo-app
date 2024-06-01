import React from 'react';

const style = {
	border: '2px solid #f4f4f4',
	fontSize: '24px',
	margin: '0 auto',
	padding: '24px 12px'
}

const TodoItem = ({ todo }) => {
	return <p style={style}>{todo.title}</p>
}

export default TodoItem;