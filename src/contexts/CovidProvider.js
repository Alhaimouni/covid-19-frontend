import axios from 'axios';
import React, { useState } from 'react';


export const covidContext = React.createContext();

function CovidProvider(props) {

  const [covidData, setCovidData] = useState({});

  async function getCovidData() {
    const url = 'https://api.covid19api.com/world/total';
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    setCovidData(data);
  }


  const value = {
    covidData
  };

  return (
    <covidContext.Provider value={value}>
      {props.children}
    </covidContext.Provider>
  )
}

export default CovidProvider
