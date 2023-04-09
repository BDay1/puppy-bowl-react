import React from "react";

const PlayerForm = () => {

return (
    <div id='new-player-form'>
      <form>
        <label className='name'>Name:</label>
        <input type='text' name='name' />
        <label className='breed'>Breed:</label>
        <input type='text' name='breed' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default PlayerForm;