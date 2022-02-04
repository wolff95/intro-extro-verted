import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Landing.scss';
import Main from '../../layout/Main';

const Landing = () => {
  const navigate = useNavigate();

  const findOutHandler = () => {
    navigate('/questions');
  };

  return (
    <Main>
      <div className='landing'>
        <div className='title-wrapper'>
          <h1>
            Are you...
            <br />
            introverted?
            <br />
            extroverted?
          </h1>
        </div>
        <div className='subtitle-container'>
          <h2>Complete the test to</h2>
          <button className='xxxl' onClick={findOutHandler}>
            Find out
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Landing;
