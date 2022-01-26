import React from 'react';
import "../App.css"
import cx from "classname";

const Toggle = ({ rounded = false, isToggled, onToggle, ToggleText, ToggleTextNum }) => {

    const sliderCX = cx('slider', {
        rounded: rounded
    },'slider-background-slide')

    return (
        <label className='toggle'>
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className={sliderCX}/>
            <p className='toggle-text'>{ToggleText[ToggleTextNum]}</p>
        </label>
    );
}

export default Toggle;