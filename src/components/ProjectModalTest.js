/* eslint-disable react/prop-types */
// import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const LoginModal = (props) => {
  console.log('PROPS in MODAL', props);
  return (
    <div className="modal">
      <Modal isOpen={props.isOpen} contentLabel="Example Modal">
        <h1>Modal Screen</h1>
        <button onClick={props.toggle}>close</button>
      </Modal>
    </div>
  );
};

export default LoginModal;
