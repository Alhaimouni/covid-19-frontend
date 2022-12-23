import React, { useEffect, useContext } from 'react';
import Statistics from './Statistics';
import '../style/home.css';
import { covidContext } from '../contexts/CovidProvider';
import SearchForm from './SearchForm';
import { When } from 'react-if';
import HomeCard from './HomeCard';

function Home() {
  const { getCovidData, covidData, searchData } = useContext(covidContext);
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className='home'>
      <p className='title'>Word Total Statistics</p>
      <Statistics covidData={covidData} />
      <p className='title'>Get statistics for a specific country</p>
      <SearchForm />
      <div className='div-search-result'>
        <When condition={searchData.length}>
          {searchData.map((item, index) => (
            <HomeCard key={index} date={item.Date} cases={item.Cases} />
          ))}
        </When>
      </div>
    </div>
  )
}

export default Home;