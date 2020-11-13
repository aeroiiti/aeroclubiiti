import React, { Fragment } from 'react';
import MemberItem from './MemberItem.js';
import PropTypes from 'prop-types';

const Members = ({ members, error }) => {
  return (
    <Fragment>
      {!error ? (
        <div className='grid grid-cols-3 gap-6'>
          {members.map((member) => (
            <MemberItem key={member._id} member={member} />
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

Members.propTypes = {
  members: PropTypes.array.isRequired,
};
export default Members;
