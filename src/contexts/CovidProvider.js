import axios from 'axios';
import React, { useState } from 'react';


export const covidContext = React.createContext();

function CovidProvider(props) {

  const [covidData, setCovidData] = useState({});
  const [searchData, setSearchData] = useState([]);

  async function getCovidData() {
    const url = 'https://api.covid19api.com/world/total';
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    setCovidData(data);
  }

  async function searchByInputs(e) {
    let fromdate = e.target.from.value.split('-');
    let todate = e.target.to.value.split('-');
    const url = `https://api.covid19api.com/country/${e.target.contry.value}/status/confirmed?from=${`${fromdate[0]}-${fromdate[2]}-${fromdate[1]}`}T00:00:00Z&to=${`${todate[0]}-${todate[2]}-${todate[1]}`}T00:00:00Z`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    console.log(data);
    setSearchData(data);
  }

  const value = {
    covidData,
    getCovidData,
    searchData,
    searchByInputs
  };

  return (
    <covidContext.Provider value={value}>
      {props.children}
    </covidContext.Provider>
  )
}

export default CovidProvider
