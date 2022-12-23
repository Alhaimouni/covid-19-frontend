import React, { useContext } from 'react';
import { covidContext } from '../contexts/CovidProvider';
import { When } from 'react-if';

function CountriesCard({ allData, country, confirmed, deaths, recovered, date }) {
  const { addToRecords } = useContext(covidContext);
  return (
    <div className='div-Country-card'>
      <p className='head'>Country: {country}</p>
      <p className='data'>Total Confirmed Cases: {confirmed}</p>
      <p className='data'>Total Deaths Cases: {deaths}</p>
      <p className='data'>Total Recovered Cases: {recovered}</p>
      <p className='data'>Date: {date}</p>
      <button onClick={() => { addToRecords(allData) }}>ADD TO MY RECORDS</button>
    </div>
  )
}

export default CountriesCard

