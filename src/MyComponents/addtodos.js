import React, {useState} from 'react';

export default function Addtodos(props) {

    const [todoTitle, settodoTitle] = useState("");
    const [todoDesc, settodoDesc] = useState("");

    const submit = () => {
        if(!todoTitle || !todoDesc) {
            alert("Both title and description are mandatory!");
        }

        props.addToDo(todoTitle, todoDesc);
    };

    const handleTitleChange = (e) => {
        settodoTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        settodoDesc(e.target.value);
    };

  return (
    <>
      <div className="container my-3">
        <h3>Add TODO</h3>
        <form>
          <div className="mb-3 w-25">
            <label htmlFor="todo-title" className="form-label">
              Title
            </label>
            <input
              onChange={handleTitleChange}
              type="text"
              className="form-control"
              id="todo-title"
              value = {todoTitle}
            />
          </div>
          <div className="mb-3 w-25">
            <label htmlFor="todo-description" className="form-label">
              Description
            </label>
            <input
              onChange={ handleDescChange}
              type="text"
              className="form-control"
              id="todo-description"
              value={todoDesc}
            />
          </div>
          <button onClick={submit} type="button" className="btn btn-sm btn-success">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

Addtodos.propTypes = {

};
