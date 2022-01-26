import React from 'react';
import '../App.css';

const Toggle = (props) => {
    const {isChecked, handleToggle} = props;

    return (
        <label className='switch'>
            <input type="checkbox"/>
            <span className='slider'/>
        </label>
    );
}

export default Toggle;