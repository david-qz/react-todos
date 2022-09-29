import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({ todo: { id, description, complete } }) {
  const [checked, setChecked] = useState(complete);

  function handleToggle() {
    setChecked(!checked);
  }

  return <div className='TodoItem'>
    <input type="checkbox" checked={checked} onClick={handleToggle}/>
    <span
      className={`description ${checked && 'complete'}`}
      onClick={handleToggle}
    >
      {description}
    </span>
  </div>;
}
