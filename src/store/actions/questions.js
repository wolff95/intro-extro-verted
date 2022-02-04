import axios from 'axios';
import {
  ANSWER_QUESTION,
  GET_QUESTIONS,
  GET_QUESTIONS_ERROR,
  SUBMIT,
  RESET,
} from '../types';

export const getQuestions = () => async (dispatch) => {
  try {
    const res = await axios.get(`./data/questions.json`);

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_QUESTIONS_ERROR,
    });
  }
};

export const answerQuestion = (_id, value, score) => async (dispatch) => {
  dispatch({
    type: ANSWER_QUESTION,
    payload: { _id, value, score },
  });
};

export const submit = () => async (dispatch) => {
  dispatch({
    type: SUBMIT,
  });
};

export const reset = () => async (dispatch) => {
  dispatch({
    type: RESET,
  });
};
