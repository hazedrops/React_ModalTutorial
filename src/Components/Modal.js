import React from 'react';
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> &times; </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>The next page is awesome! You should move forward. You will enjoy it.</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
