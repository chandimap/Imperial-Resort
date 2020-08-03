import React, {useContext} from 'react';

// import Calendar from './Calendar';
import {RoomContext} from '../../Contexts';
import {withRouter,Link} from 'react-router-dom';



/** GET UNIQUE  VALUE */
const getUnique =(items, value)=>{
    // set accept only unique value
    //check what kind of val we have for the type
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter=(props ) =>{
    const context = useContext(RoomContext);

//  destructure
const {handleChange,handleSubmit,  type, capacity, price, minPrice, maxPrice ,breakfast, pets}= context;

// get unique type
let types = getUnique(props.rooms, 'type');
// add all and whatever is already in the type arr
types = ['all', ...types];

// map to option
types = types.map((item, index )=>{
  
        return (<option 
                key={index} 
                value ={item}>{item}</option>)}
        )

    let guest = getUnique(props.rooms, 'capacity');
     guest = guest.map((item, index)=>{
         return (<option 
            key={index} 
            value ={item}>{item}</option>
         )
     })    

    return (
        <section>
            <div className="filter-container">
                <form className="filter-form" onSubmit={handleSubmit}>
                    {/* select type */}
                  <div className="form-group">
                      <label htmlFor="type">room type</label>
                      <select 
                      className="form-control"
                      name="type" 
                      id="type"
                      value={type}
                      onChange={handleChange}
                      >
                        {types}
                      </select>
                  </div>
                    {/* end of select type */}
                    {/* select guest */}
                  <div className="form-group">
                      <label htmlFor="capacity">guest</label>
                      <select 
                      className="form-control"
                      name="capacity" 
                      id="capacity"
                      value={capacity}
                      onChange={handleChange}
                      >
                        {guest}
                      </select>
                  </div>
                    {/* end of select type */}

                    {/* room price */}
                    <div className="form-group">
                      <label htmlFor="price">room price ${price}</label>
                      <input
                      className="form-control"
                      type='range'
                      name="price" 
                      min={minPrice}
                      max={maxPrice}
                      id="price"
                      value={price}
                      onChange={handleChange}
                      />
                  </div>
                    {/* end room price */}

                     {/* breakfast and pets*/}
                     <div className="form-group single-extra">
                      <input
                      type="checkbox"
                      name="breakfast" 
                      id="breakfast"
                      checked={breakfast}
                      onChange={handleChange}
                      />
                       <label htmlFor="breakfast">breakfast </label>
                    
                      <input
                      type="checkbox"
                      name="pets" 
                      id="pets"
                      checked={pets}
                      onChange={handleChange}
                      />
                        <label htmlFor="pets">pets </label>
                  </div>
                  <div className="form-group btn">

                    {props.history.location.pathname !=='/rooms'&&  <Link to='/rooms'>
                <button type="button" className="btn__home-filter">search</button>
                  </Link>}
                  </div>
                      {/*  breakfast and pets*/}
                </form>

            </div>
           
        </section>
    )
}
export default withRouter( RoomsFilter);