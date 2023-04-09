import React, {useEffect, useState} from 'react';
import Players from './Players'
import PlayerForm from './PlayerForm';
import SearchPlayer from './SearchPlayer';
import { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer, searchPlayer } from '../api/ajaxHelpers';
import './style.css';



const Main = () => {
    const [players, setPlayers] = useState([]);//this is the state of the site
   
    
    useEffect (() => {
    const getPlayers = async () => {
                const players = await fetchAllPlayers();
                
                setPlayers(players)
    };
            getPlayers();
}, []);
    
    return(
        <>
        <SearchPlayer SearchPlayer={SearchPlayer} />
        <PlayerForm /> 
        <Players  players={players} setPlayers={setPlayers}/>

        </>
    );
};
export default Main;
// 