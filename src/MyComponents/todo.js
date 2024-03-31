import React from 'react'

export default function todo({todo, onDelete}) {
  return (
    <>
      <div key={todo.id}>
        <h4>
          {todo.title}
        </h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </>
  )
}
