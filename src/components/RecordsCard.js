import React, { useContext } from 'react'
import { covidContext } from '../contexts/CovidProvider'

function RecordsCard({ allData }) {
  const { deleteRecord } = useContext(covidContext);
  
  return (
    <div className='div-records-card'>
      <p className='head'>Country: {allData.country}</p>
      <p className='data'>Date: {allData.date}</p>
      <button onClick={() => { deleteRecord(allData._id) }}>DELETE RECORD</button>
    </div>
  )
}

export default RecordsCard
