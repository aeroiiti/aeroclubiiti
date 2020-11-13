import {
  SELECT_MEMBER,
  GET_MEMBERS,
  MEMBER_ERROR,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MEMBER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        error: null,
        loading: false,
      };
    case SELECT_MEMBER:
      return {
        ...state,
        member: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
