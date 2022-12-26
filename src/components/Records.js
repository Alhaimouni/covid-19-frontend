import React, { useContext, useEffect } from 'react';
import { When } from 'react-if';
import { covidContext } from '../contexts/CovidProvider';
import '../style/records.css';
import RecordsCard from './RecordsCard';

const Records = () => {

  const { state, getAllRecords } = useContext(covidContext);

  useEffect(() => {
    getAllRecords();
  }, [state.records]);

  return (
    <div className='div-records'>
      <p className='title'>Saved Records</p>
      <div className='div-records-content'>
        <When condition={state.records.length}>
          {state.records.map((item, index) => (
            <RecordsCard key={index} allData={item} />
          ))}
        </When>
        <When condition={!state.records.length}>
          <p className='no-records-alert'>No Available Records</p>
        </When>
      </div>
    </div>
  )
}

export default Records
