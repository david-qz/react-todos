import './TodoItem.css';

export default function TodoItem({ todo, toggleTodoCompleted, deleteTodo }) {
  const { id, description, complete } = todo;

  function handleToggle() {
    toggleTodoCompleted(id);
  }

  function handleDelete() {
    deleteTodo(id);
  }

  return <div className='TodoItem'>
    <input type="checkbox" checked={complete} onChange={handleToggle} />
    <span
      className={`description ${complete && 'complete'}`}
      onClick={handleToggle}
    >
      {description}
    </span>
    <i className="delete fa-regular fa-trash-can" onClick={handleDelete} />
  </div>;
}
