import { SELECT_MEMBER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return {
        ...state,
        member: action.payload,
      };
    default:
      return state;
  }
};
