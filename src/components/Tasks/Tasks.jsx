import React from 'react'
import { bdResponse } from '../../BdResponse';
import { Link } from 'react-router-dom';
import css from './tasks.module.css'

export default function Tasks(props) {

    const { statusTask } = props

    // const [backlog, setBacklog] = useState([])

    return (
        <div>
            {bdResponse.map((item) => (
                item.status === statusTask ?
                    <div className={css.item} key={item.id} >
                        <Link to={`task/${item.id}`}>
                            <p className={css.task}>{item.name}</p>
                        </Link>
                    </div> : ''
            ))}
        </div>
    )
}
