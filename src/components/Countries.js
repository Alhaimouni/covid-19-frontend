import React, { useContext, useEffect } from 'react';
import '../style/contries.css';
import CountriesCard from './CountriesCard';
import { covidContext } from '../contexts/CovidProvider';
import { When } from 'react-if';

function Countries() {

  const { getSummary, summary } = useContext(covidContext);

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <div className='div-contries'>
      <p className='title'>Covid-19 Statistics for all countries</p>
      <div className='div-contries-content'>
        <When condition={!summary.length}>
          <p className='alert'>Can't Get Data now </p>
        </When>
        <When condition={summary.length}>
          {summary.map((item, index) => (
            <CountriesCard key={index} allData={item} />
          ))}
        </When>
      </div>
    </div>
  )
}

export default Countries
