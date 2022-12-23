import React, { useContext } from 'react';
import { covidContext } from '../contexts/CovidProvider';

function CountriesCard({ allData }) {
  const { addToRecords } = useContext(covidContext);
  return (
    <div className='div-Country-card'>
      <p className='head'>Country: {allData.Country}</p>
      <p className='data'>Total Confirmed Cases: {allData.TotalConfirmed}</p>
      <p className='data'>Total Deaths Cases: {allData.TotalDeaths}</p>
      <p className='data'>Total Recovered Cases: {allData.TotalRecovered}</p>
      <p className='data'>Date: {allData.Date}</p>
      <button onClick={() => { addToRecords(allData) }}>ADD TO MY RECORDS</button>
    </div>
  )
}

export default CountriesCard;

