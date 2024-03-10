import React from 'react'

function DropDown({array, temp, setTemp}) {
    const handleOptionClick = (event) => {
        event.preventDefault();
        const option = event.target.value;

        setTemp(option);
    };
  return (
    <div>
        <select id='optionDown'
            onChange={handleOptionClick}
        >

            {array.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default DropDown