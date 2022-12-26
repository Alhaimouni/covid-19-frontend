import axios from 'axios';
import React, { useReducer } from 'react';
import covidReducer, { initialState, AcorrectSummary, AbadSummary, AgetAllRecords, AsearchData, AsetCovidData } from '../reducers/covid.reducer';


export const covidContext = React.createContext();

function CovidProvider(props) {

  const [state, d] = useReducer(covidReducer, initialState);

  async function getCovidData() {
    const url = `${process.env.REACT_APP_COVID}/world/total`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    d(AsetCovidData(data));
  }

  async function searchByInputs(e) {
    let fromdate = e.target.from.value.split('-');
    let todate = e.target.to.value.split('-');
    const url = `${process.env.REACT_APP_COVID}/country/${e.target.contry.value}/status/confirmed?from=${`${fromdate[0]}-${fromdate[2]}-${fromdate[1]}`}T00:00:00Z&to=${`${todate[0]}-${todate[2]}-${todate[1]}`}T00:00:00Z`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    d(AsearchData(data));
  }

  async function getSummary() {
    const url = `${process.env.REACT_APP_COVID}/summary`;
    const axiosResponse = await axios.get(url);
    if (axiosResponse.data.Countries) {
      const countriesData = axiosResponse.data.Countries;
      d(AcorrectSummary(countriesData));
    } else {
      d(AbadSummary(axiosResponse.data.Message));
    }
  }

  async function addToRecords(data) {
    const url = `${process.env.REACT_APP_SERVER}/record`;
    const body = {
      country: data.Country,
      date: data.Date
    }
    await axios.post(url, body);
  }

  async function getAllRecords() {
    const url = `${process.env.REACT_APP_SERVER}/record`;
    const axiosResponse = await axios.get(url);
    const data = axiosResponse.data;
    d(AgetAllRecords(data));
  }

  async function deleteRecord(id) {
    const url = `${process.env.REACT_APP_SERVER}/record/${id}`;
    console.log(url);
    await axios.delete(url);
  }

  const value = {
    getCovidData,
    searchByInputs,
    getSummary,
    getAllRecords,
    addToRecords,
    deleteRecord,
    state
  };

  return (
    <covidContext.Provider value={value}>
      {props.children}
    </covidContext.Provider>
  )
}

export default CovidProvider
