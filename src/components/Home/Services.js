import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Title from '../Global/Title';

import {FaCocktail,FaHiking, FaShuttleVan, FaSpa} from 'react-icons/fa';


export default class Services extends Component {
    state={
        services:[
            {
                id:1,
                icon: <FaCocktail/>,
                title:'free cocktail hour',
                info:'Every night from 6pm - 7pm which is a wonderful way for the guests to interact and meet one another.'
            },
            {
                id:2,
                icon: <FaHiking/>,
                title:'lets explore',
                info:'Many path to explore.'
            },
            {
                id:3,
                icon: <FaShuttleVan/>,
                title:'free shuttle',
                info:'hassle-free:get there and leave easy. '
            },
            {
                id:4,
                icon: <FaSpa/>,
                title:'free spa',
                info:'for a relaxing moment.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
               <Title 
               title='services'
               />
               <div className="services-center">
                   {this.state.services.map(service=>{
                       return(
                           <article key={service.id} className='service'>
                               <span>{service.icon}</span>
                              <h4>{service.title}</h4>
                              <p>{service.info}</p>

                           </article>
                       )

                   })}
               </div>
            </section>
        )
    }
}

Services.propTypes = {
    services:PropTypes.array,
  };