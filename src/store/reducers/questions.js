import { GET_QUESTIONS, ANSWER_QUESTION, SUBMIT, RESET } from '../types';

const initialState = {
  list: null,
  result: null,
  loading: true,
};

const QuestionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        list: payload,
        loading: false,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        list: [
          ...state.list.map((q) =>
            q._id !== payload._id
              ? q
              : { ...q, choice: payload.value, score: payload.score }
          ),
        ],
        loading: false,
      };
    case SUBMIT:
      return {
        ...state,
        result: state.list.map((q) => q.score).reduce((v, cv) => cv + v, 0),
        loading: false,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default QuestionsReducer;
