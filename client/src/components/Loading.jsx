import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="loading-container">
      <PacmanLoader color="#36D7B7" size={25} />
      <p>Loading...</p>
    </div>
  )
}

export default Loading
