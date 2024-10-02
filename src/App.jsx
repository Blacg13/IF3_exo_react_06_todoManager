import './App.css';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import Formulaire from './components/Formulaire/Formulaire.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (newTodo) => {
    console.log('newTodo (App) :', newTodo);

    setTasks(tasks.concat(newTodo));
    // bonus de Aurélien : setTodos([...todos, newTodo]);
    console.log('todos (App) :', tasks);
  };
  const handleComplete = (id) => {
    console.log('complete (app)', id);
    setTasks((tasks) => {
      // cloner tasks (on ne peut pas changer tasks directement, parce que React ne va voir le changement que s'il y a une référence mémoire et donc un changement d'objet /-> s'il n'y a qu'un changement dans l'objet, React ne va pas le voir ==> bug classique dans React) :
      // on doit toujours considérer les props et les states comme immuables
      const result = [...tasks]; //ou structuredClone(tasks)
      const thisTaskItem = result.find((task) => task.id === id);
      thisTaskItem.completion = true;
      return result;
    });
  };
  const handleDelete = () => {
    console.log('delete (app)');
  };
  return (
    <>
      <Formulaire onSubmit={handleSubmit} />
      <ToDoList
        todos={tasks}
        onTodoComplete={handleComplete}
        onTodoDelete={handleDelete}
      />
    </>
  );
}

export default App;
