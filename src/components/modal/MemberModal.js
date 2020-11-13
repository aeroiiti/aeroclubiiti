import React, { useContext, useEffect } from 'react';
import MemberContext from '../../context/members/membersContext';
import member from '../../assets/images/member.jfif';
import Aastha from '../../assets/images/Aastha.jpeg';
import galaxy from '../../assets/images/galaxy.jpg';
const MemberModal = () => {
  const memberContext = useContext(MemberContext);
  if (memberContext.member !== null) {
    const {
      Name,
      Bio,
      Projects,
      RepoLink,
      Contact,
      Progress,
    } = memberContext.member;

    return (
      <div
        id='modal1'
        className='modal wrapper container text-white opacity-75'
        style={{
          backgroundImage: `url(${galaxy})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='p-4 '>
          <img
            src={Name === 'Aastha Luthra' ? Aastha : member}
            alt='Member'
            className='object-cover w-1/3 rounded-full  '
            style={{ height: '400px' }}
          />

          {Projects.length <= 1 ? (
            <span className='badge grey  white-text'>Inactive</span>
          ) : (
            <span className='badge green darken-2  white-text'>Member</span>
          )}
          <div className='text-4xl font-bold  '>{Name}</div>
          <div className='text-sm font-hairline'>
            <span className='font-semibold '>Current Status : </span>
            {Progress}
            <br />
            <span className='text-lg   font-mono'>
              <span className='font-normal'> Contact:</span>
              {Contact}
            </span>
          </div>
          <div className='px-4 text-2xl font-serif pt-16'>Bio : </div>
          <div className='container text-black  '>
            <ul className='collection '>
              <li className='collection-item opacity-75 hover:opacity-100'>
                <span className='font-semibold text-xl grey lighten-3 mr-2'>
                  Current Year :{' '}
                </span>
                {Bio.Year}
              </li>
              <li className='collection-item opacity-75 hover:opacity-100'>
                <span className='font-semibold text-xl grey lighten-3 mr-2'>
                  Branch :{' '}
                </span>
                {Bio.Branch}
              </li>
              <li className='collection-item opacity-75 hover:opacity-100'>
                <span className='font-semibold text-xl grey lighten-3 mr-2'>
                  Skills :{' '}
                </span>
                {Bio.Skills.length > 0 ? (
                  Bio.Skills.map((skill, i) => (
                    <div
                      className='green darken-2 inline mx-1 py-1 px-2 font-semibold text-cream-white'
                      key={i}
                    >
                      {skill}
                    </div>
                  ))
                ) : (
                  <div className='inline'>Learning..</div>
                )}
              </li>
              <li className='collection-item opacity-75 hover:opacity-100'>
                <span className='font-semibold text-xl grey lighten-3 mr-2'>
                  Interests :{' '}
                </span>
                {Bio.Interests.length > 0 ? (
                  Bio.Interests.map((skill, i) => (
                    <div
                      className='cyan darken-2 inline mx-1 py-1 px-2 font-semibold text-cream-white'
                      key={i}
                    >
                      {skill}
                    </div>
                  ))
                ) : (
                  <div className='inline'>Exploring..</div>
                )}
              </li>
            </ul>
          </div>

          <div className='px-4 text-2xl font-serif pt-16'>Projects : </div>
          <div className='container pb-32'>
            <ul className='collapsible text-black'>
              {Projects.length > 0 ? (
                Projects.map((project) => (
                  <li key={project._id}>
                    <div className='collapsible-header opacity-75 hover:bg-blue-200'>
                      {project.Name}
                    </div>
                    <div className='collapsible-body'>
                      <span>Description : {project.Description}</span>
                      <br />
                      <br />

                      <span>Link : {project.Link}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li>
                  <div className='collapsible-header opacity-75 hover:bg-blue-200'>
                    Still researching
                  </div>
                  <div className='collapsible-body'>
                    <span>Description : Working...</span>
                    <br />
                    <br />
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='modal1' className='modal wrapper container'>
        No Info FOund
      </div>
    );
  }
};

export default MemberModal;
