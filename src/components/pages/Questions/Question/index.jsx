import React from 'react';
import './Question.scss';

const Question = ({ question: { _id, question }, options, onChange }) => {
  return (
    <div className='question-body'>
      <p>{question}</p>
      {options.map((option) => (
        <div key={option._id} className='option'>
          <input
            type='radio'
            name={`${_id}-question`}
            value={option._id}
            onChange={() => onChange(option._id, option.score)}
          />
          <label htmlFor={`${_id}-question`}>{option.answer}</label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Question;
