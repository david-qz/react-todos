import { useEffect } from 'react';
import { useState } from 'react';
import * as TodosService from '../services/todos';

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    TodosService.getAllTodos()
      .then(todos => setTodos(todos))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, [version]);

  async function addTodo(description) {
    await TodosService.addTodo(description);
    setVersion(version => version + 1);
  }

  return { todos, addTodo };
}
