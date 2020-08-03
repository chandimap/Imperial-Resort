import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import {RoomContext} from '../../Contexts';

import Banner from '../Global/Banner';
import  StyledShowcase from '../Global/StyledShowCase'

const SingleRoom= (props)=>  {
    const context = useContext(RoomContext);
    //  destructure
    const {getRoom}= context;
  
    const room = getRoom(props.match.params.id);

    if( !room ){
        return(
           <div className="error">
             <h3>no such room could be found</h3> 
             <Link to="/rooms" className="btn-primary">back to rooms</Link>
         </div>)
       } 

    const{ name, description, capacity,size, price, extras, breakfast, pets, images}= room;
    
    //    destructure array images
    const [mainImg, ...defaultImg]= images;

    return (
            <>
           < StyledShowcase
        //    img={images[0]}
           img={mainImg}
            >
               <Banner
               title={`${name} room`}>
                   <Link to='/rooms' className='btn-primary'>back to rooms</Link>
               </Banner>
           </ StyledShowcase>

           <section className="single-room">
             
               <div className="single-room-info">
                   <article className="desc">
                       <h3>details</h3>
                       <p>{description}</p>
                   </article>
                   <article className="info">
                       <h3>info</h3>
                       <h6>price:£{price}</h6>
                       <h6>size: {size} SFQT</h6>

                       <h6>
                          max capacity : { capacity > 1 ? `${capacity} people` : `${capacity} person`} 
                       </h6>

                        <h6>{pets ? `pets allowed` : `no pets allowed`} </h6>

                        <h6>{breakfast && `free breakfast included`} </h6>


                   </article>
               </div>

             
           </section>

           <section className="room-extras">
             
             <h6>extras</h6>
              <ul className='extras'>
                  {extras.map((item, index)=>(
                      <li key={index}> {item}</li>
                  ))}

              </ul>
           </section>

           <div className="single-room-images">
                   {defaultImg.map((img,index)=>(
                 
                       <img key={index} src={img} alt={name}/>
                    ) )}
               </div>


           </>

        )
    }
    export default   SingleRoom ;
