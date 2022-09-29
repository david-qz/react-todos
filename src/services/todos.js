import { client, checkError } from './client';

export async function getAllTodos() {
  const response = await client
    .from('todos')
    .select('*')
    .order('created_at');

  return checkError(response);
}

export async function addTodo(description) {
  const response = await client
    .from('todos')
    .insert({ description })
    .single();

  return checkError(response);
}

export async function updateTodo(todo) {
  const response = await client
    .from('todos')
    .update(todo)
    .match({ id: todo.id })
    .single();

  return checkError(response);
}
