import React, { useContext, Fragment } from 'react';
import MemberItem from './MemberItem.js';
import MembersContext from '../../context/members/membersContext';

const Members = () => {
  const membersContext = useContext(MembersContext);
  const { members, error } = membersContext;
  return (
    <Fragment>
      {!error ? (
        <div className='grid grid-cols-3 gap-8'>
          {members.map((member) => (
            <MemberItem key={member.key} member={member} />
          ))}
        </div>
      ) : (
        <div>
          <h1> Oops! The site has crashed!!</h1>
        </div>
      )}
    </Fragment>
  );
};
export default Members;
