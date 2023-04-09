import React from 'react';
import PlayerCard from './PlayerCard';

const Players = (props) => {
    return (
      
        <div id='all-players-container'>

            {props.players.map((player) =>{ 
                return(
               <PlayerCard  puppy={props.players}/> 
                )
            })}
         
        </div>
      
    );
  };
  
  export default Players;
  