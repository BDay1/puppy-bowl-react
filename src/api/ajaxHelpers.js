const cohortName = '2303-ftb-et-web-ft-react';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2303-ftb-et-web-ft-react/players`);
      const result = await response.json();
      if (result.error) {
          throw result.error;
      }
      return result.data.players;
    } catch (error) {
      console.error('error finding players!', error);
    }
  };

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players${playerId}`);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.players.id;
      } catch (error) {
        console.error('error finding single player!', error);
      }
    };
  

    export const addNewPlayer = async ({ name, breed }) => {
      
        console.log({ name, breed });
        try {
          const response = await fetch(`${APIURL}/players/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
           //stringify converts it to a string
            body: JSON.stringify({ name, breed }),
          });
          const {
            success,
            error,
            data: { newPlayer },
          } = await response.json();
          console.log(newPlayer);

          return newPlayer;
        } catch (error) {
          console.error('Nope, try again!', error);
        }
      };
      
      export const removePlayer = async (playerId) => {
        try {
          const response = await fetch(`${APIURL}/players/${playerId}`, {
            method: 'DELETE',
          });
          const { success, error, data } = await response.json();
          if (error) throw error;
      
          return;
        } catch (error) {
          console.error('Well that didnt work, try again....', error);
        }
      };
          
      