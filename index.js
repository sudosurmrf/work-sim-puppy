document.addEventListener('DOMContentLoaded', async () => {
  try{

    const apiPull = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players');
    const response = await apiPull.json();
    console.log(response.data.players); //grabs the entire list of players
    console.log(response.data.players[0].name); //grabs the name of the specific indexed player
    
    
    
    
    
    
    
  }catch(err) {
    console.log(`Error fetching`, err);
  }
    
  });