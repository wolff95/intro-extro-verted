import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import './Questions.scss';

import {
  getQuestions,
  answerQuestion,
  submit,
} from '../../../store/actions/questions';

import Main from '../../layout/Main';
import Question from './Question';
import Actions from './Actions';

const Questions = ({ getQuestions, answerQuestion, submit, list, result }) => {
  const navigate = useNavigate();
  const count = list?.length - 1;
  const start = 0;
  const end = count;

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  const onChangeHandler = (question, choice, score) => {
    answerQuestion(question, choice, score);
  };

  const scrollToQuestion = (index) => {
    const _id = list[index]._id;
    document.getElementById(`${_id}`)?.scrollIntoView();
  };

  const onSubmit = () => {
    submit();
    navigate('/result');
  };

  if (result) {
    return <Navigate to='/result' />;
  }

  return (
    list && (
      <Main>
        <div id='slider' className='slider'>
          {list.map(({ _id, choice, question, options }, index) => (
            <div id={_id} key={_id} className='slide'>
              <div className='container'>
                <Question
                  question={{ _id, question }}
                  options={options}
                  onChange={(value, score) =>
                    onChangeHandler(_id, value, score)
                  }
                />
                <Actions
                  navigationConfig={{ start, end, current: index }}
                  disableNext={!choice}
                  onNavigation={scrollToQuestion}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          ))}
        </div>
      </Main>
    )
  );
};

const mapStateToProps = ({ questions: { list, loading, result } }) => ({
  list,
  loading,
  result,
});

export default connect(mapStateToProps, {
  getQuestions,
  answerQuestion,
  submit,
})(Questions);
