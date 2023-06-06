import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TravelAgency } from '../TravelAgency';
import { DestinyDetail } from '../pages/DestinyDetail';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <TravelAgency /> } />
      <Route path='/destiny-detail' element={ <DestinyDetail /> } />
    </Routes>
  )
}
