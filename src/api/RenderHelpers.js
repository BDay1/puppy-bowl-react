import SearchPlayer from '../components/SearchPlayer';
import { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer } from './ajaxHelpers';

const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');
const searchPlayerContainer = document.getElementById('search-bar');

export const renderAllPlayers = (playerList) => {
  if (!playerList || !playerList.length) {
    playerContainer.innerHTML = '<h3>No players to display!</h3>';
    return;
  }

  let playerContainerHTML = '';
  for (let i = 0; i < playerList.length; i++) {
    const pup = playerList[i];
    let pupHTML = `
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">${pup.name}</p>
          <p class="pup-number">#${pup.id}</p>
        </div>
        <img src={pup.imageUrl} alt="photo of ${pup.name} the puppy">
        <button class="detail-button" data-id=${pup.id}>See details</button>
      </div>
    `;
    playerContainerHTML += pupHTML;
  }

  playerContainer.innerHTML = playerContainerHTML;

  let detailButtons = [...document.getElementsByClassName('detail-button')];
  for (let i = 0; i < detailButtons.length; i++) {
    const button = detailButtons[i];
    button.addEventListener('click', async () => {
        const player = await fetchSinglePlayer(button.dataset.id);
        renderSinglePlayer(players);
    });
  }
};
let deleteButtons = [...document.getElementsByClassName('delete-button')];
deleteButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    await removePlayer(button.dataset.id);
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
  });
});


export const renderSinglePlayer = (playerObj) => {
  if (!playerObj || !playerObj.id) {
    playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
    return;
  }

  let pupHTML = `
    <div class="single-player-view">
      <div class="header-info">
        <p class="pup-title">${playerObj.name}</p>
        <p class="pup-number">#${playerObj.id}</p>
      </div>
      <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
      <p>Breed: ${playerObj.breed}</p>
      <img src="${playerObj.imageUrl}" alt="photo of ${
    playerObj.name
  } the puppy">
      <button id="see-all">Back to all players</button>
    </div>
  `;

  playerContainer.innerHTML = pupHTML;
};

export const renderNewPlayerForm = () => {
  let formHTML = `
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name" />
      <label for="breed">Breed:</label>
      <input type="text" name="breed" />
      <button type="submit">Submit</button>
    </form>
  `;
  newPlayerFormContainer.innerHTML = formHTML;

  let form = document.querySelector('#new-player-form > form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let playerData = {
      name: form.elements.name.value,
      breed: form.elements.breed.value,
    };
    await addNewPlayer(playerData);
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    form.elements.name.value = '';
    form.elements.breed.value = '';
  });
};
  
export const renderSearchPlayerForm = (players, searchTerm) => {
  let formHTML = `
  <form>
    <label for='search term'>Search Term:</label>
    <input type='text' search='search term' />
    <button  onClick={() => filteredPups(players)} type='search'>Search</button>
  </form>
  `;
  searchPlayerContainer.innerHTML = formHTML;

  let form = document.querySelector('#search-bar > form');
    form.addEventListener('search', async (event) => {
   
  const filteredPups = players.filter(data => data.player.toLowerCase().includes(searchTerm.toLowerCase())
    );
   
    return filteredPups;
    });
  }