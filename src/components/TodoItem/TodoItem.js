import './TodoItem.css';

export default function TodoItem({ todo, toggleTodoCompleted }) {
  const { id, description, complete } = todo;

  function handleToggle() {
    toggleTodoCompleted(id);
  }

  return <div className='TodoItem'>
    <input type="checkbox" checked={complete} onChange={handleToggle} />
    <span
      className={`description ${complete && 'complete'}`}
      onClick={handleToggle}
    >
      {description}
    </span>
  </div>;
}
