import React, {useContext} from 'react';

import {RoomContext} from '../../Contexts';

import Services from './Services';
import Showcase from '../Global/Showcase';
import RoomsFilter from '../Rooms/RoomsFilter';
import FeaturedRooms  from './FeaturedRooms';

const Home=() =>{
    const  {rooms} = useContext(RoomContext);
 
    return (
        <>
          <Showcase>
          <RoomsFilter rooms={rooms}/>
          </Showcase>
          <Services/>
          <FeaturedRooms/>   
        </> 
    )
};

export default Home;
