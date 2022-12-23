import React, { useContext, useEffect } from 'react';
import { When } from 'react-if';
import { covidContext } from '../contexts/CovidProvider';
import '../style/records.css';
import RecordsCard from './RecordsCard';

const Records = () => {

  const { records, getAllRecords } = useContext(covidContext);

  useEffect(() => {
    getAllRecords();
  }, [records]);

  return (
    <div className='div-records'>
      <p className='title'>Saved Records</p>
      <div className='div-records-content'>
        <When condition={records.length}>
          {records.map((item, index) => (
            <RecordsCard key={index} allData={item} />
          ))}
        </When>
        <When condition={!records.length}>
          <p className='no-records-alert'>No Available Records</p>
        </When>
      </div>
    </div>
  )
}

export default Records
