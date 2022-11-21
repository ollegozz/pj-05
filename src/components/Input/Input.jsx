import React, { useEffect, useState } from 'react'
import { bdResponse } from '../../BdResponse';

export default function Input() {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {

    }, [bdResponse])

    function send(e) {
        e.preventDefault()
        bdResponse.push({
            status: 'Backlog',
            id: bdResponse.length + 1,
            name: inputValue,
            description: ''
        })
        setInputValue('')
    }

    console.log(bdResponse);

    return (

        <form action="submit">
            <input type="text" placeholder='задача'
                onChange={e => setInputValue(e.target.value)}
                value={inputValue} />
            <button type='submit' onClick={send}>Submit</button>
        </form>
    )
}
