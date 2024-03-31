import './App.css';
import Header from "./MyComponents/header";
import Footer from "./MyComponents/footer";
import Todos from "./MyComponents/todos";
import Addtodo from "./MyComponents/addtodos";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) => {
    setTodosList(todosList.filter((e) => {return e !== todo}))
  };

  const addTodo = (title, desc) => {
    if(!title || !desc) return;

    const id = !todosList || todosList.length === 0 ? 1 : todosList[todosList.length - 1].id;
    setTodosList([...todosList, {
      id: id,
      title: title,
      desc: desc
    }]);
  };

  const [todosList, setTodosList] = useState([
    {
      id: 1,
      title: "Groceries",
      desc: "Due today, buddyboy!"
    },
    {
      id: 2,
      title: "Complete REACT course",
      desc: "😄"
    }
  ]);

  return (
    <>
    <Header searchBar={false}/>
    <Addtodo addToDo={addTodo}/>
    <Todos todos={todosList} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
