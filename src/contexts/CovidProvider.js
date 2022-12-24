import axios from 'axios';
import React, { useState } from 'react';


export const covidContext = React.createContext();

function CovidProvider(props) {

  const [covidData, setCovidData] = useState({});
  const [searchData, setSearchData] = useState([]);
  const [summary, setSummary] = useState([]);
  const [records, setRecords] = useState([]);
  const [message, setMessage] = useState('');

  async function getCovidData() {
    const url = `${process.env.REACT_APP_COVID}/world/total`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    setCovidData(data);
  }

  async function searchByInputs(e) {
    let fromdate = e.target.from.value.split('-');
    let todate = e.target.to.value.split('-');
    const url = `${process.env.REACT_APP_COVID}/country/${e.target.contry.value}/status/confirmed?from=${`${fromdate[0]}-${fromdate[2]}-${fromdate[1]}`}T00:00:00Z&to=${`${todate[0]}-${todate[2]}-${todate[1]}`}T00:00:00Z`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    console.log(data);
    setSearchData(data);
  }

  async function getSummary() {
    const url = `${process.env.REACT_APP_COVID}/summary`;
    const axiosResponse = await axios.get(url);
    if (axiosResponse.data.Countries) {
      const countriesData = axiosResponse.data.Countries;
      setSummary(countriesData);
      setMessage('');
    } else {
      setMessage(axiosResponse.data.Message);
    }
  }

  async function addToRecords(data) {
    const url = `${process.env.REACT_APP_SERVER}/addrecord`;
    const body = {
      country: data.Country,
      date: data.Date
    }
    await axios.post(url, body);
  }

  async function getAllRecords() {
    const url = `${process.env.REACT_APP_SERVER}/getrecords`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    setRecords(data);
  }

  async function deleteRecord(id) {
    const url = `${process.env.REACT_APP_SERVER}/deleterecord/${id}`;
    console.log(url);
    await axios.delete(url);
  }

  const value = {
    covidData,
    getCovidData,
    searchData,
    searchByInputs,
    summary,
    getSummary,
    records,
    getAllRecords,
    message,
    addToRecords,
    deleteRecord
  };

  return (
    <covidContext.Provider value={value}>
      {props.children}
    </covidContext.Provider>
  )
}

export default CovidProvider
