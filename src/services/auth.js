import { client } from './client';

export function getUser() {
  return client.auth.currentUser;
}

export async function logIn(email, password) {
  return await client.auth.signIn({ email, password });
}

export async function signUp(email, password) {
  return await client.auth.signUp({ email, password });
}

export async function signOut() {
  await client.auth.signOut();
}
