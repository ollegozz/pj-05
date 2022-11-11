import React, { useEffect } from 'react'
import { bdResponse } from '../BdResponse';
import { useParams } from 'react-router-dom';


const Cards = () => {
  const { id } = useParams()
  // const [card, setCard] = useState(null)

  useEffect(() => {
    bdResponse.map((item) => {
      <div className='item' key={item.id}></div>
    }
    
  )}, [id])

  return (
    <div>card
      <p>{id}1</p>

    </div>
  )
}

export default Cards;