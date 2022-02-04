import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Result.scss';
import Main from '../../layout/Main';

import { reset } from '../../../store/actions/questions';

const Result = ({ result, reset }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!result) {
      navigate('/questions');
    }
  }, [result, navigate]);

  const doneHandler = () => {
    reset();
    navigate('/');
  };

  return (
    <Main>
      <div className='result'>
        <div className='wrapper'>
          <div className='communication'>
            <h2>Good! you are</h2>
            <h1>{result >= 25 ? 'Introverted' : 'Extroverted'}</h1>
          </div>
          <button className='xxxl' onClick={doneHandler}>
            Done
          </button>
        </div>
      </div>
    </Main>
  );
};

const mapStateToProps = ({ questions: { loading, result } }) => ({
  loading,
  result,
});

export default connect(mapStateToProps, { reset })(Result);
