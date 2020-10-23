import React, { useContext, Fragment } from 'react';
import MemberContext from '../../context/members/membersContext';
import member from '../../assets/images/member.jfif';

const MemberModal = () => {
  const memberContext = useContext(MemberContext);
  const Member = memberContext.members.find(
    (member) => member.Name == memberContext.member
  );
  const { Name, Bio, Project, RepoLink, Contact, Progress } = Member;
  return (
    <div id='modal1' className='modal wrapper container  '>
      <div className='border-4 border-black rounded-lg m-2'>
        <div className='border-2 border-black rounded-lg m-1'>
          <div className='px-8 '>
            <img src={member} alt='Member' className='circle responsive-img ' />
            {Project.length <= 1 ? (
              <span className='badge grey  white-text'>Inactive</span>
            ) : (
              <span className='badge green darken-2  white-text'>Member</span>
            )}
            <div className='text-4xl font-bold  '>{Name}</div>
            <div className='text-sm font-hairline'>
              <span className='font-semibold'>Current Status : </span>
              {Progress}
              <br />
              <span className='text-lg  black-text font-mono'>
                <span className='font-normal'> Contact:</span>
                {Contact}
              </span>
            </div>
            <div className='px-4 text-2xl font-serif pt-16'>Bio : </div>
            <div className='container'>
              <ul className='collection'>
                <li className='collection-item'>
                  <span className='font-semibold text-xl grey lighten-3 mr-2'>
                    Current Year :{' '}
                  </span>
                  {Bio.Year}
                </li>
                <li className='collection-item'>
                  <span className='font-semibold text-xl grey lighten-3 mr-2'>
                    Branch :{' '}
                  </span>
                  {Bio.Branch}
                </li>
                <li className='collection-item'>
                  <span className='font-semibold text-xl grey lighten-3 mr-2'>
                    Skills :{' '}
                  </span>
                  {Bio.Skills}
                </li>
                <li className='collection-item'>
                  <span className='font-semibold text-xl grey lighten-3 mr-2'>
                    Intrest :{' '}
                  </span>
                  {Bio.Intrest}
                </li>
              </ul>
            </div>

            <div className='px-4 text-2xl font-serif pt-16'>Projects : </div>
            <div className='container pb-32'>
              <ul className='collapsible'>
                {Project.map((project) => (
                  <li>
                    <div className='collapsible-header hover:bg-blue-200'>
                      {project.Name}
                    </div>
                    <div className='collapsible-body'>
                      <span>Description : {project.Desc}</span>
                      <br />
                      <br />

                      <span>Link : {project.Link}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
