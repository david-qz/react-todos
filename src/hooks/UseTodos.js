import { useEffect } from 'react';
import { useState } from 'react';
import { getAllTodos } from '../services/todos';

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos()
      .then(todos => setTodos(todos))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, []);

  return { todos };
}
