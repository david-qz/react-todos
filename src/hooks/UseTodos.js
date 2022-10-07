import { useEffect } from 'react';
import { useState } from 'react';
import * as TodosService from '../services/todos';

export default function useTodos() {
  // FIXME: refreshing an authoritative list of todos from the server
  // after each state transition before updating the UI adds a significant
  // delay to the app. Find another way to doo this.
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodosService.getAllTodos()
      .then(todos => setTodos(todos))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, []);

  async function addTodo(description) {
    const newTodo = await TodosService.addTodo(description);
    setTodos(prev => [...prev, newTodo]);
  }

  async function toggleTodoCompleted(id) {
    setTodos(prev => prev.map(x => x.id === id ? { ...x, complete: !x.complete } : { ...x }));

    const todo = todos.find(x => x.id === id);
    await TodosService.updateTodo({ ...todo, complete: !todo.complete });
  }

  async function deleteTodo(id) {
    setTodos(prev => prev.filter(x => x.id !== id));
    await TodosService.deleteTodo(id);
  }

  return { todos, addTodo, toggleTodoCompleted, deleteTodo };
}
