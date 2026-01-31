// Módulo para requisições à API do GitHub

const BASE_URL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}


export async function fetchGitHubUserRepos(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}/repos?sort=created&per_page=10`);
  if (!response.ok) {
    throw new Error('Repositórios não encontrados.');
  }
  return await response.json();
}