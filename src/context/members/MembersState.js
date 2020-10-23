import React, { useReducer } from 'react';

import MembersContext from './membersContext';
import MembersReducer from './membersReducer';
import { SELECT_MEMBER } from '../types';

const MembersState = (props) => {
  const initialState = {
    members: [
      {
        key: 1,
        Name: 'Neelanshu ',
        Project: [
          {
            Name: 'Aviation study',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
        ],
        Bio: {
          Year: '2nd',
          Branch: 'Mechanical',
          Skills: 'Python, Java, React, Javascript, openCV, NeuralNetwork',
          Intrest:
            'I am very much fascinated with the complexeties of neural architecture and cad designinng of the drone',
        },
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
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Ornithopter',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
        ],
        Bio: {
          Year: '2nd',
          Branch: 'Mechanical',
          Skills: 'Python, Java, React, Javascript, openCV, NeuralNetwork',
          Intrest:
            'I am very much fascinated with the complexeties of neural architecture and cad designinng of the drone',
        },
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
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Ornithopter',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
        ],
        Bio: {
          Year: '2nd',
          Branch: 'Mechanical',
          Skills: 'Python, Java, React, Javascript, openCV, NeuralNetwork',
          Intrest:
            'I am very much fascinated with the complexeties of neural architecture and cad designinng of the drone',
        },
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
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Cad Modelling study',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Ornithopter',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },

          {
            Name: 'Drone Racing',
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
        ],
        Bio: {
          Year: '2nd',
          Branch: 'Mechanical',
          Skills: 'Python, Java, React, Javascript, openCV, NeuralNetwork',
          Intrest:
            'I am very much fascinated with the complexeties of neural architecture and cad designinng of the drone',
        },
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
            Desc:
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quiquisquam rerum perspiciatis! Eaque doloremque quibusdam blanditatque veniam asperiores suscipit voluptate quod officia ipsnemo maxime voluptates? Aperiam, nostrum.',
            Link: 'Hello',
          },
        ],
        Bio: {
          Year: '2nd',
          Branch: 'Mechanical',
          Skills: 'Python, Java, React, Javascript, openCV, NeuralNetwork',
          Intrest:
            'I am very much fascinated with the complexeties of neural architecture and cad designinng of the drone',
        },
        RepoLink: 'youtube',
        Contact: 'abc@gmail.com',
        Progress: 'Im Out in the city...',
      },
    ],
    error: null,
    member: 'Neelanshu ',
  };

  const [state, dispatch] = useReducer(MembersReducer, initialState);

  const selectMember = (name) => {
    dispatch({
      type: SELECT_MEMBER,
      payload: name,
    });
  };
  return (
    <MembersContext.Provider
      value={{
        members: state.members,
        error: state.error,
        member: state.member,
        selectMember,
      }}
    >
      {props.children}
    </MembersContext.Provider>
  );
};

export default MembersState;
