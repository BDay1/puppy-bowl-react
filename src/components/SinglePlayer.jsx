import React from 'react';


const SinglePlayer = () => {
  
    return( 
     <>
      <div class="header-info">
        <p class="pup-title">${playerObj.name}</p>
        <p class="pup-number">#${playerObj.id}</p>
    </div> 
      <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
      <p>Breed: ${playerObj.breed}</p>
      <img src={playerObj.imageUrl} alt="photo of ${
    playerObj.name
  } the puppy"/>
      <button id="see-all">Back to all players</button>   
  </>  )
      }; 
      
    

export default SinglePlayer;