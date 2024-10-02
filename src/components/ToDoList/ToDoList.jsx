import style from './ToDoList.module.css';
function ToDoItem({
  id,
  title,
  description,
  priority,
  completion,
  onComplete = () => {
    console.log('complete (ToDoItem)');
    itemStyle();
  },
  onDelete = () => {
    console.log('delete (ToDoItem)');
  },
}) {
  const itemStyle =
    priority === 'urgente'
      ? style.todoUrgent
      : completion == true
      ? style.todoCompleted
      : style.todoItem;
  return (
    <>
      <li className={itemStyle} key={id}>
        <div className={style.itemInfo}>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <div className={style.itemButtons}>
          <button
            onClick={() => onComplete(id)}
            className={style.completeButton}
          >
            Terminé
          </button>
          <button onClick={() => onDelete(id)} className={style.deleteButton}>
            Supprimer
          </button>
        </div>
      </li>
    </>
  );
}

function ToDoList({ todos = [], onTodoDelete, onTodoComplete }) {
  console.log('todos (todolist) :', todos);

  return (
    <>
      <ul className={style.ulcontainer}>
        {todos.map((todo) => (
          <ToDoItem
            {...todo}
            key={todo.id}
            onComplete={onTodoComplete}
            onDelete={onTodoDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
