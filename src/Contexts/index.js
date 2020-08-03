import React, { Component } from 'react';


import items from '../data';

const RoomContext = React.createContext();

// provider - allow compo to access


// provider -use   to access info


class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true, 

        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        // minSize:0,
        // maxSize:0,
        checkIn:Date,
        checkOut:Date,
        breakfast:false,
        pets:false,
    
    }


    /**GET DATA */

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);

        // get max value from data
        let maxPrice = Math.max(...rooms.map(room => room.price));
        // console.log(maxPrice);
        
        let maxSize = Math.max(...rooms.map(room => room.size));
        // console.log(maxSize);

        // 
        this.setState({
            rooms,
            featuredRooms, 
            sortedRooms: rooms,
             loading:false ,
             price:maxPrice,
             maxPrice,
             maxSize,
        
            });
    }

    formatData=(items)=>{
        // loop through data
        let temporyItems =items.map(item =>{

            // access id
            // let id = item.sys.id;
            const {id} = item.sys;
            // access img
         let images = item.fields.images.map(image =>image.fields.file.url);
            

            // create new room obj - destructure field prop
            let room = {...item.fields, images, id}
            return room;
        });

        return temporyItems;
    }

    /**GET ROOM */
    getRoom=(slug)=>{
        // destructure
        let temporyRooms = [...this.state.rooms];
        const room =temporyRooms.find(room => room.slug === slug);
        return room;
    };
    
    /**HANDLE CHANGE */
     handleChange =event =>{
        //  const type = event.target.type;
         const target = event.target;

        // look at the type of input checkbox or not
         const value = target.type === 'checkbox' ? target.checked :target.value;
        // get the name attr in form fields
         const name = event.target.name;

         this.setState({
             [name]: value
         }, 
        //  call filterrooms each time value change    
         this.filterRooms);
     }


     filterRooms =()=>{
        // 1) get all the data /rooms
        let { rooms,  type, capacity, price,
            //  maxSize, minSize, 
             breakfast, pets} = this.state; 
        // 2) 'copy' rooms arr
        let tempRooms = [...rooms];
        // transform value from str to int
        capacity= parseInt(capacity);
        price= parseInt(price);

        /* FILTER BY TYPE */
        if(type !=='all'){
            // get only rooms that match the type
         tempRooms = tempRooms.filter(room => room.type === type);
        }

        /* FILTER BY CAPACITY */
        if(capacity!== 1){
            // get only rooms that match the type
         tempRooms = tempRooms.filter(room=> room.capacity === capacity);
        }

        /* FILTER BY PRICE */
        // display price if less than 
         tempRooms = tempRooms.filter(room => room.price <= price);

        /* FILTER BY SIZE */
        //   
        //  tempRooms = tempRooms.filter(room => room.size > minSize &&room.size < maxSize);

        /* FILTER BY PETS */
        //   
        if(pets){
            // get only rooms that match the type
         tempRooms = tempRooms.filter(room=> room.pets === true);
        }
        
        /* FILTER BY BREAKFAST */
        //   
        if(breakfast){
            // get only rooms that match the type
         tempRooms = tempRooms.filter(room=> room.breakfast === true);
        }

        // change sorted rooms access in the list
        this.setState({sortedRooms : tempRooms});
     }

 

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom,  handleChange: this.handleChange}}>
                {this.props.children}    
            </RoomContext.Provider>
        )
    }
}
 const RoomConsumer =RoomContext.Consumer;


 export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context = {value}/>}
        </RoomConsumer>
    }
 }


 export {RoomProvider,RoomConsumer , RoomContext}

 