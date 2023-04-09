import React from 'react';


const PlayerCard = (props) => {
    const pup = props.puppy;
    return(
        <>
        <div className="single-player-card">
        <div className="header-info">
          <p className="pup-title">{pup.name}</p>
          <p className="pup-number">{pup.id}</p>
        </div>
        <img src={pup.imageUrl} />
        <button className="detail-button" data-id={pup.id}>See details</button>
        <button className="delete-button" data-id={pup.id}>Remove from roster</button>
      </div>
        </>
    )
}
export default PlayerCard;