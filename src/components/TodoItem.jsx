import React from 'react';

const styles = {
	todoItem: {
		border: '2px solid #f4f4f4',
		fontSize: '24px',
		margin: '0 auto',
	},
	checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  }
}

const TodoItem = ({ todo, toggleCompleted }) => {
	const getTodoTitleStyle = () => {
		if (todo.completed === true) {
			return { textDecoration: 'line-through' };
		} else {
			return { textDecoration: 'none' };
		}
	}


	return (
		<div style={styles.todoItem}>
			<p style={getTodoTitleStyle()}>
				<input onChange={() => toggleCompleted(todo.id)}
					type="checkbox" style={styles.checkbox} />
				{todo.title}
			</p>
		</div>
	)
}

export default TodoItem;