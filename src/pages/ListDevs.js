import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  SearchBar,
  Header,
  ListDevsOrLevels,
  RegisterOrEditDevForm,
} from '../components';
// import PropTypes from 'prop-types';

function ListDevs() {
  const {
    whichButtonIsActive,
  } = useSelector(state => state.levelReducer);

  return (
    <div>
      <Header title={ `${whichButtonIsActive} Devs` } />
      <SearchBar devOrLevel="dev" />
      { (whichButtonIsActive === 'show') && (
        <ListDevsOrLevels devOrLevel="dev" />
      ) }
      { (whichButtonIsActive === 'register') && (
        <RegisterOrEditDevForm />
      ) }
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

// ListDevs.propTypes = {

// };

export default ListDevs;
