import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import member from '../../assets/images/member.jfif';
import MembersContext from '../../context/members/membersContext';

const MemberItem = ({
  member: { Name, Project, RepoLink, Contact, Progress },
}) => {
  const membersContext = useContext(MembersContext);

  return (
    <div className='wrapper container text-gray-800  text-center  text-xl font-semibold  grey lighten-3 py-4 px-6 rounded-lg'>
      <img src={member} alt='Member' className='circle responsive-img ' />
      {Name}

      {Project.length <= 1 ? (
        <span className='badge grey  white-text'>Inactive</span>
      ) : (
        <span className='badge green darken-2  white-text'>Member</span>
      )}

      <div className='text-sm font-hairline'>{Progress}</div>

      <a
        className='mt-4 waves-effect waves-light btn modal-trigger  cyan darken-3 '
        href='#modal1'
        onClick={() => {
          membersContext.selectMember(Name);
        }}
      >
        More
      </a>
    </div>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

export default MemberItem;
