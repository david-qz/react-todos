import { useEffect } from 'react';
import { useState } from 'react';
import * as TodosService from '../services/todos';

export default function useTodos() {
  // FIXME: refreshing an authoritative list of todos from the server
  // after each state transition before updating the UI adds a significant
  // delay to the app. Find another way to doo this.
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

  async function toggleTodoCompleted(id) {
    const todo = todos.find(x => x.id === id);
    todo.complete = !todo.complete;
    await TodosService.updateTodo(todo);
    setVersion(version => version + 1);
  }

  return { todos, addTodo, toggleTodoCompleted };
}
