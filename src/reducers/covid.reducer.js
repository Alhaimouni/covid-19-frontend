
export const initialState = {
  covidData: {},
  searchData: [],
  summary: [],
  records: [],
  message: ''
}

const configs = {
  setCovidData: 'setCovidData',
  searchData: 'searchData',
  correctSummary: 'correctSummary',
  badSummary: 'badSummary',
  getAllRecords: 'getAllRecords',
}

export default function covidReducer(currentState, action) {
  const { type, payload } = action;
  switch (type) {
    case configs.setCovidData:
      return (
        { ...currentState, covidData: payload }
      );
    case configs.searchData:
      return (
        { ...currentState, searchData: payload }
      );
    case configs.correctSummary:
      return (
        { ...currentState, message: '', summary: payload }
      );
    case configs.badSummary:
      return (
        { ...currentState, message: payload, summary: [] }
      );
    case configs.getAllRecords:
      return (
        { ...currentState, records: payload }
      );
    default:
      return currentState;
  }
}

export function AsetCovidData(payload) {
  return {
    type: 'setCovidData',
    payload
  }
}

export function AsearchData(payload) {
  return {
    type: 'searchData',
    payload
  }
}

export function AcorrectSummary(payload) {
  return {
    type: 'correctSummary',
    payload
  }
}

export function AbadSummary(payload) {
  return {
    type: 'badSummary',
    payload
  }
}

export function AgetAllRecords(payload) {
  return {
    type: 'getAllRecords',
    payload
  }
}

