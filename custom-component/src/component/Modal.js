import React, { useState } from 'react';
import "../App.css"
import cx from "classname";

const Modal = ((props)=>{

    return(
        <div id="modal" className='modal-background'>
            <div className='modal-content'>
                <label className='close-modal' onClick={props.onModal}>X</label>
                <p className='modal-text'>HELLO CODESTATES!</p>
            </div>
        </div>
    )
})

export default Modal;