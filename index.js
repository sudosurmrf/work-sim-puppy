document.addEventListener('DOMContentLoaded', () => {

  const fetchPuppyPlayers = async () => {

    try{
      
      const apiPull = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players');
      const response = await apiPull.json();
      // console.log(response.data.players); //grabs the entire list of players
      // console.log(response.data.players[0].name); //grabs the name of the specific indexed player
      // console.log(response.data.players);
      let players = response.data.players;
      displayPlayers(players);
      
      
      
      
      
    }catch(err) {
      console.log(`Error fetching`, err);
    }
    
  }
  const displayPlayers = (players) => {
    const playersCardsGrid = document.getElementById(`playersCardsGrid`);

    players.forEach(player => {
      const playerCard = document.createElement('section');
      playerCard.classList.add(`player-card`);

      const playerName = document.createElement(`h3`);
      playerName.textContent = player.name;

      const playerBreed = document.createElement(`p`);
      playerBreed.textContent = `Breed: ${player.breed}`;

      const playerAge = document.createElement('p');
      playerAge.textContent = `Age: ${player.age}`;


      playerCard.appendChild(playerName);
      playerCard.appendChild(playerBreed);
      playerCard.appendChild(playerAge);


      playerCard.addEventListener(`click`, () => {
        openPlayerCard(player);
      });

      playersCardsGrid.appendChild(playerCard);


    });
  };

  const openPlayerCard = (player) => {
    const overlay = document.getElementById(`overlay`);
    const enlargedCard = document.querySelector(`.enlarged-card`);
    
    enlargedCard.innerHTML = ``;

    const playerName = document.createElement(`h3`);
    playerName.textContent = player.name;

    const playerBreed = document.createElement(`p`);
    playerBreed.textContent = `Breed: ${player.breed}`;

    const playerAge = document.createElement(`p`);
    playerAge.textContent = `Age: ${player.age}`;

    enlargedCard.appendChild(playerName);
    enlargedCard.appendChild(playerBreed);
    enlargedCard.appendChild(playerAge);

    overlay.style.display = `flex`;

    overlay.addEventListener(`click`, (event) => {
      if (event.target === overlay) {
        overlay.style.display = `none`;
      }
    });
  };

    
    fetchPuppyPlayers();
});
