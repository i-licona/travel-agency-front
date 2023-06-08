import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TravelAgency } from '../TravelAgency';
import { DestinyDetail } from '../pages/DestinyDetail';
import { Login } from '../pages/Login';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <TravelAgency /> } />
      <Route path='/destiny-detail' element={ <DestinyDetail /> } />
      <Route path='/login' element={ <Login /> } />
    </Routes>
  )
}
