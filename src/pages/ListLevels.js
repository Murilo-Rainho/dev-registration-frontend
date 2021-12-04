import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  ListDevsOrLevels,
  SearchBar,
  Header,
  RegisterLevelForm,
} from '../components';
// import PropTypes from 'prop-types';

function ListLevels() {
  const {
    whichButtonIsActive,
  } = useSelector(state => state.levelReducer);

  return (
    <div>
      <Header title={ `${whichButtonIsActive} Levels` } />
      <SearchBar devOrLevel="level" />
      { (whichButtonIsActive === 'show' || whichButtonIsActive === 'remove') && (
        <ListDevsOrLevels devOrLevel="level" />
      ) }
      { (whichButtonIsActive === 'register') && (
        <RegisterLevelForm />
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

// ListLevels.propTypes = {

// };

export default ListLevels;
