import React, { useContext } from 'react';
import { covidContext } from '../contexts/CovidProvider';
import { FaMapMarkerAlt } from 'react-icons/fa';



function SearchForm() {
  const { searchByInputs } = useContext(covidContext);

  function getSpecificData(e) {
    e.preventDefault();
    searchByInputs(e);
  }


  return (
    <form className='search-form' onSubmit={getSpecificData}>
      <div className='div-form-input'>
        <input type='text' placeholder='Contry Name' name='contry' />
        <FaMapMarkerAlt />
      </div>
      <div className='div-form-input'>
        <input type='date' name='from' />
      </div>
      <div className='div-form-input'>
        <input type='date' name='to' />
      </div>
      <input className='div-form-submit' type='submit' value='SEARCH 🔎' />
    </form>
  )
}

export default SearchForm
