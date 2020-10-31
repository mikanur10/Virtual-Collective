import React, { useState, useEffect } from 'react'
import './UpcomingEvents.css'
import { getEvents } from '../../services/events'


const UpcomingEvents = (props) => {

    const [events, setEvents] = useState({})
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchEvent = async () => {
          const response = await getEvents()
          console.log(response);
            setEvents(response)
            setLoaded(true)
        }
        fetchEvent()
    }, [])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

  return (
      <div className="bird-landing">
        {events && events.map(event =>
          // <Link to={`/bird/${event.name}`}>
            <img src={event.imgUrl} />
          // </Link>
        )}
      </div>
   
        
            // <div className="product-detail">
            //     <img className="product-detail-image" src={event.imgURL} alt={event.name} />
            //     <div className="detail">
            //         <div className="name">{event.name}</div>
            //         <div className="price">{`$${event.date}`}</div>
            //         <div className="description">{event.time}</div>
            //         <div className="description">{event.subCategory}</div>
            //         <div className="button-container">
            //             <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
            //             <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
            //         </div>
            //     </div>
            // </div>
 
    )
}

export default UpcomingEvents