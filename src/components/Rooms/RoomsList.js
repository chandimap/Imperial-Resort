import React from 'react';
import Room from '../Global/Room'

export default function RoomsList({rooms}){
 
    if (rooms.length === 0)
    return(
    <div className="empty-search">
        <h3>no rooms match your search</h3>
    </div>)
    
   
 return(
        <section className='roomslist'>
            <div className="roomslist-center">
            {rooms.map(room => <Room key={room.id} room={room}/>)}
            </div>
        </section>
    )
}
