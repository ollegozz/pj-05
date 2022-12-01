import React from 'react'

const Select = ({ mosk, statusTask, value, onChange }) => {

    return (
        <select
            // value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option></option>
            {mosk.map(option => (
                statusTask === option.status &&
                <option key={option.id}
                    value={option.id}
                    name={option.name}
                    >
                    {option.name}
                </option>

            ))}
        </select>
    );
}


export default Select;
