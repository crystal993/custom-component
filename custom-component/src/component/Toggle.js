import React from 'react';
import "../App.css"

const Toggle = (props) => {

    return (
        <label className='toggle'>
            <input type="checkbox"/>
            <span className='slider round'/>
            <p className='toggle-text'>Toggle Switch OFF</p>
        </label>
    );
}

export default Toggle;