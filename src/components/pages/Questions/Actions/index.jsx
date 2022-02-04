import React from 'react';
import './Actions.scss';

const Actions = ({
  navigationConfig: { start, end, current, done },
  disableNext,
  onNavigation,
  onSubmit,
}) => {
  let summary = [];
  for (let i = 0; i <= end; i++) {
    const currently = i === current;
    summary.push(
      <div key={i} className={currently ? 'bullet currently' : 'bullet'}></div>
    );
  }

  return (
    <div className='question-footer'>
      <div className='summary'>{summary}</div>
      <div className='actions'>
        {start !== current && (
          <button onClick={() => onNavigation(current - 1)}>Previous</button>
        )}
        {end !== current ? (
          <button
            onClick={() => onNavigation(current + 1)}
            disabled={disableNext}
          >
            Next
          </button>
        ) : (
          <button onClick={() => onSubmit()} disabled={disableNext}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Actions;
