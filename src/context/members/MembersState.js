import React, { useReducer } from 'react';

import MembersContext from './membersContext';
import MembersReducer from './membersReducer';
import axios from 'axios';
import {
  SELECT_MEMBER,
  GET_MEMBERS,
  MEMBER_ERROR,
  SET_LOADING,
} from '../types';

const MembersState = (props) => {
  const initialState = {
    members: [],
    error: null,
    member: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(MembersReducer, initialState);

  const selectMember = (name) => {
    dispatch({
      type: SELECT_MEMBER,
      payload: name,
    });
  };
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  const getMembers = async () => {
    setLoading();
    try {
      const res = await axios.get('/api/members');
      dispatch({
        type: GET_MEMBERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MEMBER_ERROR,
        payload: 'The site has crashed',
      });
    }
  };
  return (
    <MembersContext.Provider
      value={{
        members: state.members,
        error: state.error,
        member: state.member,
        selectMember,
        getMembers,
        setLoading,
      }}
    >
      {props.children}
    </MembersContext.Provider>
  );
};

export default MembersState;
