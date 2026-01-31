// Captura o valor do input ao clicar no botão e exporta a função

	const inputSearch = document.getElementById('input-search');
	const btnSearch = document.getElementById('btn-search');
    const profileResults = document.querySelector('.profile-results');

    const BASE_URL = 'https://api.github.com';

		btnSearch.addEventListener('click', async () => {
			const userName = inputSearch.value;

			if (userName) {
                profileResults.innerHTML=`<p class="loading">Carregando... </p>`;

                try{

                const response = await fetch(`${BASE_URL}/users/${userName}`);

                if (!response.ok) {
                    alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                    profileResults.innerHTML ="";
                    return;
                }

                const userData = await response.json();


                profileResults.innerHTML = `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" 
                    class="profile-avatar">

                    <div class="profile-info">
                    <h2>${userData.name || 'Não possui nome cadastrado'}</h2>
                    <P>${userData.bio || 'Não possui bio cadastrada 😞.'}</p>
                        </div>

                </div>`;

            }catch(error){
                console.error('Erro ao buscar o perfil do usuário:',error);
                profileResults.innerHTML ="";
            }
    

            }else{
                alert('Digite um nome de usuário do GitHub.');
                profileResults.innerHTML ="";
            }
		});