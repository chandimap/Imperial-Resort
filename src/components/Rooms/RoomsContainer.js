import React , {useContext} from 'react';

import Title from '../Global/Title';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

import {RoomContext} from  '../../Contexts';
import Loading from '../Global/Loading';


function  RoomsContainer({context}){

    const {loading, sortedRooms, rooms} = useContext(RoomContext);
        if(loading)return <Loading/>
                    
    return(
        <>
             <Title title='search room'/>
            <div className='container'>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
            </div>
            </>
    )
}
export  default RoomsContainer;
