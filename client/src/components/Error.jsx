import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <p>{message}</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error
