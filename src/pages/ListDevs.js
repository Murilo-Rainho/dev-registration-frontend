import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  SearchBar,
  Header,
  ListDevsOrLevels,
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
      { (whichButtonIsActive === 'show' || whichButtonIsActive === 'remove') && (
        <ListDevsOrLevels devOrLevel="dev" />
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
