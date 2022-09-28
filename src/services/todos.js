import { client, checkError } from './client';

export async function getAllTodos() {
  const response = await client
    .from('todos')
    .select('*');

  return checkError(response);
}

export async function addTodo(description) {
  const response = await client
    .from('todos')
    .insert({ description });

  return checkError(response);
}
