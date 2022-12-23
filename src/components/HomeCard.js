import React from 'react'

function HomeCard({ date, cases }) {
  return (
    <div className='homeCard'>
      <p className='date'>Date: {date}</p>
      <p className='cases'>Number of confirmed cases: {cases}</p>
    </div>
  )
}

export default HomeCard
