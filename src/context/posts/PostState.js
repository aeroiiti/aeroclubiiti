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
        name: "Swarm of drones to locate leopard in campus",
        link: "abc.com",
        description:
          "We often hear about wildlife spotted in campus , the most dangerous of it is leopard. Due to grassy fields and such a big campus it is difficult and dangerous to trace the leopard in the campus .To encounter this we came up with this project of tracking the leopard with drones. Two or more drones that communicate with each other through swarm technology and track the movement of leopard on campus using image processing techniques and principles of ML and AI. Participants will also get to learn about working of drone as well.",
        coverURL: "temp.png",
        date: "2020-10-19T13:29:37.622Z",
        __v: 0,
      },
      {
        team: ["Member3", "Member4"],
        _id: "5f8d945f27488063686fbb87",
        name: "Drones for delivery of food from Zippy & Aladeen to hostel",
        link: "def.com",
        description:
          "By using the autonomous technology in drones we can deliver food & light weight stuff from one place to another. We will use GPS for tracking the path of destination & for drone autonomous we will use software like UGCS, Mission planner, QGroundControl It will make the delivery faster than normal.",
        coverURL: "temp2.png",
        date: "2020-10-19T13:27:59.123Z",
        __v: 0,
      },
      {
        team: ["Member1", "Member2"],
        _id: "5f8d919c19bf2aa272ceaac5",
        name: "Post 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        coverURL: "temp.png",

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
