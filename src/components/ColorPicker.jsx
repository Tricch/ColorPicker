import React, { useState } from 'react'
import Copy from "../assets/copy.svg"

const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff")

    const handleColorClick = () => {
        navigator.clipboard.writeText(color)
        alert(`Color ${color} is copied to clipboard.😍`)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className='color-container'>
            <h1>Color Picker</h1>
            <div className='color-selected' onClick={handleColorClick} style={{ backgroundColor: color, color: color }}>
                <img src={Copy} alt="copy" />
                <p>Color Selected: <span> {color} </span></p>
            </div>
            <label htmlFor="color">Pick a Color:
                <input type="color" id="color" onChange={handleColorChange} value={color} />
            </label>
        </div>
    )
}

export default ColorPicker
