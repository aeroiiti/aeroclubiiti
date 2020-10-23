import React, { useReducer } from "react";
import PostContext from "./postContext";
import postReducer from "./postReducer";

import { GET_POSTS, POST_ERROR } from "../types";

const PostState = (props) => {
  const initialState = {
    posts: [
      {
        team: ["Member1", "Member2"],
        _id: "5f8d94c127488063686fbb88",
        name: "Post 1",
        link: "abc.com",
        description: "Lorem Ipsum",
        coverURL: "temp.png",
        date: "2020-10-19T13:29:37.622Z",
        __v: 0,
      },
      {
        team: ["Member3", "Member4"],
        _id: "5f8d945f27488063686fbb87",
        name: "Post 2",
        link: "def.com",
        description: "Lorem Ipsum Dolor Sit Amet",
        coverURL: "temp2.png",
        date: "2020-10-19T13:27:59.123Z",
        __v: 0,
      },
      {
        team: ["Member1", "Member2"],
        _id: "5f8d919c19bf2aa272ceaac5",
        name: "Post 1",
        description: "Lorem Ipsum",
        coverURL: "temp.png",
        link: "abc.com",
        date: "2020-08-07T19:15:17.385Z",
      },
    ],

    loading: true,
    errors: null,
  };
  const [state, dispatch] = useReducer(postReducer, initialState);
  /*
  //Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get("/api/posts");
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };

  //Add Post
  const addPost = async (post) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/posts", post, config);
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };
  //update post
  const updatePost = async (post) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(`/api/posts/${post._id}`, post, config);
      dispatch({ type: UPDATE_POST, payload: post });
      if (state.filter) {
        clearFilter();
      }
    } catch (err) {
      console.log(err.response);
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };
  //Delete Post
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
      if (state.filter) {
        clearFilter();
      }
    } catch (err) {
      console.log(err.response);
      dispatch({ type: POST_ERROR, payload: err.response });
    }
  };

  //set current
  const setCurrent = (post) => {
    dispatch({ type: SET_CURRENT, payload: post });
  };
  //clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };*/

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        errors: state.errors,
        loading: state.loading,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
