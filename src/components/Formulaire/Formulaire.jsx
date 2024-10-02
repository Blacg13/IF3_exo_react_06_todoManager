import { useId, useState } from 'react';
import style from './Formulaire.module.css';
import { nanoid } from 'nanoid';

function Formulaire({ btnSubmit = 'Ajouter', onSubmit = () => {} }) {
  const inputId = useId();
  // const [todo, setTodo] = useState({
  //   name: 'to do',
  //   description: '',
  //   priority: 'normale',
  //   completion: false,
  // });
  // const handleFormChange = (event) => {
  //   console.log(handleFormChange);
  //   const { name, value } = event.target.value;
  //   setTodo((data) => ({ ...data, [name]: value }));
  // };

  const [todoTitle, setTodoTitle] = useState('to do');
  const [todoDescription, setTodoDescription] = useState('');
  const [todoPriority, setTodoPriority] = useState('normale');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: todoTitle,
      description: todoDescription,
      priority: todoPriority,
      completion: 'false',
    };
    onSubmit(newTodo);
    console.log('newTodo (formulaire) :', newTodo);

    handleReset();
  };
  const handleReset = () => {
    setTodoTitle('to do');
    setTodoDescription('');
    setTodoPriority('normale');
  };

  return (
    <div className={style.divForm}>
      <h3>Ajouter une nouvelle tâche</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor={inputId + '-todoTitle'}>Nom </label>
        <input
          onChange={(e) => setTodoTitle(e.target.value)}
          type='text'
          id={inputId + '-todoTitle'}
          value={todoTitle}
          required
        />
        <label htmlFor={inputId + '-todoDescription'}>Description</label>
        <textarea
          onChange={(e) => setTodoDescription(e.target.value)}
          name={inputId + '-todoDescription'}
          optional={'true'}
          value={todoDescription}
        ></textarea>
        <label htmlFor={inputId + '-todoPriority'}>Priorité</label>
        <select
          onChange={(e) => setTodoPriority(e.target.value)}
          name={inputId + '-todoPriority'}
          value={todoPriority}
        >
          <option value='basse'>Basse</option>
          <option value='normale'>Normale</option>
          <option value='urgente'>Urgente</option>
        </select>
        <button className={style.btnSubmit} type='submit'>
          {btnSubmit}
        </button>
      </form>
    </div>
  );
}

export default Formulaire;
