import React from 'react';
import ErrorImage from '../images/503-error.svg';
import './styles/PageError.css';

function PageError (props) {
  return (
    <div>
      <img src={ErrorImage} alt="503 Server Error" />
      {/* {props.error.message}  */}
    </div>
  );
}

export default PageError;