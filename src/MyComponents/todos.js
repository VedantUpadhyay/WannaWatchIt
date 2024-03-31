import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'


export default function todos(props) {
  let todoContainer = {
    minHeight: '85vh'
  }

  return (
    <div className='container my-3' style={todoContainer}>
      <h3>TODOS</h3>
      {props.todos && props.todos.length > 0 ? props.todos.map((todo) => {
          return (
          <>
            <div key={todo.id}>
              <Todo key={todo.id} id={todo.id} todo={todo} onDelete={props.onDelete} />
              <hr />
            </div>
          </>
          )
        }): 
          <> 
          <h1>🎉 NO TODOs</h1>
          </>
        }
    </div>
  )
}


todos.propTypes = {
  todos: PropTypes.array
}