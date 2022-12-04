import React from 'react'
import css from './select.module.css'

const Select = ({ mosk, statusTask, onChange }) => {

    return (
        <select className={css.select}
            onChange={e => onChange(e.target.value)}
        >
            <option className={css.option}></option>
            {mosk.map(option => (
                statusTask === option.status &&
                <option
                    className={css.option}
                    key={option.id}
                    value={option.id}
                >
                    {option.name}
                </option>

            ))}
        </select>
    );
}


export default Select;
