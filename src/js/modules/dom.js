// Módulo para manipulação do DOM

export const inputSearch = document.getElementById('input-search');
export const btnSearch = document.getElementById('btn-search');
export const profileResults = document.querySelector('.profile-results');

export function showLoading() {
  profileResults.innerHTML = `<p class="loading">Carregando... </p>`;
}

export function showProfile(userData, userRepos, container) {
  profileResults.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name || 'Não possui nome cadastrado'}</h2>
        <p>${userData.bio || 'Não possui bio cadastrada 😞.'}</p>
      </div>
    </div>
    <div class="profile-counters">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

const repositoriesHTML = userRepos.map(repo => `batata`)

export function showError(message) {
  alert(message);
  profileResults.innerHTML = "";
}
