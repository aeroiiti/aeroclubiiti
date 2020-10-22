import React, { useReducer } from 'react';

import MembersContext from './membersContext';
import MembersReducer from './membersReducer';

const MembersState = (props) => {
  const initialState = {
    members: [
      {
        key: 1,
        Name: 'Neelanshu ',
        Project: [
          {
            Name: 'Aviation study',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Link: 'Hello',
          },
        ],
        RepoLink: 'youtube',
        Contact: 'abc@gmail.com',
        Progress: 'Im Out in the city...',
      },
      {
        key: 2,
        Name: 'Ankush Garg',
        Project: [
          {
            Name: 'Aviation study',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Link: 'Hello',
          },
          {
            Name: 'Ornithopter',
            Link: 'Hello',
          },
        ],
        RepoLink: 'youtube',
        Contact: 'abc@gmail.com',
        Progress: 'Im Out in the city...',
      },
      {
        key: 3,
        Name: 'Gibrael',
        Project: [
          {
            Name: 'Aviation study',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Link: 'Hello',
          },
          {
            Name: 'Ornithopter',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },
        ],
        RepoLink: 'youtube',
        Contact: 'abc@gmail.com',
        Progress: 'Im Out in the city...',
      },
      {
        key: 4,
        Name: 'Black',
        Project: [
          {
            Name: 'Aviation study',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Link: 'Hello',
          },
          {
            Name: 'Ornithopter',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },

          {
            Name: 'Drone Racing',
            Link: 'Hello',
          },
        ],
        RepoLink: 'youtube',
        Contact: 'abc@gmail.com',
        Progress: 'Im Out in the city...',
      },
      {
        key: 5,
        Name: '......',
        Project: [
          {
            Name: 'Aviation study',
            Link: 'Hello',
          },
        ],
        RepoLink: 'youtube',
        Contact: 'abc@gmail.com',
        Progress: 'Im Out in the city...',
      },
    ],
    error: null,
  };

  const [state, dispatch] = useReducer(MembersReducer, initialState);

  return (
    <MembersContext.Provider
      value={{
        members: state.members,
        error: state.error,
      }}
    >
      {props.children}
    </MembersContext.Provider>
  );
};

export default MembersState;
