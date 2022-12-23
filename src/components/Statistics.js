import React from 'react'

function Statistics({ covidData }) {
  return (
    <div className='div-statistic'>
      <p className='statistic'>{`Total Confirmed : ${covidData.TotalConfirmed}`}</p>
      <p className='statistic'>{`Total Deaths : ${covidData.TotalDeaths}`}</p>
      <p className='statistic'>{`Total Recovered : ${covidData.TotalRecovered}`}</p>
    </div>
  )
}

export default Statistics
