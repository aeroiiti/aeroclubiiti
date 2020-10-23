import { GET_POSTS, POST_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POST_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
