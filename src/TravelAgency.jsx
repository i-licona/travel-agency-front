import React from 'react';
import './styles.css';
import { Navbar } from './components/main/Navbar';
import { Header } from './components/main/Header';
import { PopularPlaces } from './components/main/PopularPlaces';
import { CardPlace } from './components/ui/CardPlace';

const popularPlaces = [
  {
    title:'Playa bonita',
    subtitle:'Mazunte',
    img:'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title:'Playa sayulita',
    subtitle:'Cancun',
    img:'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title:'Beautiful Beach',
    subtitle:'Miami',
    img:'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  
  }
];


export const TravelAgency = ()=>{

  return (
    <>
      <Navbar/>
      <div className="container">
        <Header/>
        <PopularPlaces/>
        <div className="row mt-5">
          {
            popularPlaces.map((x) => (
              <CardPlace title={ x.title } subtitle={ x.subtitle } img={ x.img } />
            ))
          }
          
        </div>
        <div className="row mt-5" style={{ marginBottom:'15px' }}>
          
        </div>
      </div>      
    </>
  );
}