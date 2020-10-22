import React from 'react';
import PropTypes from 'prop-types';
import member from '../../assets/images/member.jfif';

const MemberItem = ({
  member: { Name, Project, RepoLink, Contact, Progress },
}) => {
  console.log(Name);
  return (
    <div className='wrapper container text-gray-800  text-center  text-xl font-semibold  grey lighten-3 py-4 px-6 rounded-lg'>
      <img src={member} alt='Member' className='circle responsive-img ' />
      {Name}

      {Project.length > 6 ? (
        <span className='badge pink darken-2 white-text'>Superb</span>
      ) : null}
      {Project.length <= 1 ? (
        <span className='badge grey  white-text'>Inactive</span>
      ) : (
        <span className='badge green darken-2  white-text'>Member</span>
      )}

      <div className='text-sm font-hairline'>{Progress}</div>

      <div>
        <div className='text-m font-mono text-yellow-800 text-center'>
          Contribution:
        </div>

        <i
          className={`material-icons  ${
            Project.length >= 2 ? 'yellow-text darken-2' : 'grey-text darken-2'
          } `}
        >
          star
        </i>
        <i
          className={`material-icons  ${
            Project.length >= 4 ? 'yellow-text darken-2' : 'grey-text darken-2'
          } `}
        >
          star
        </i>
        <i
          className={`material-icons  ${
            Project.length >= 8 ? 'yellow-text darken-2' : 'grey-text darken-2'
          } `}
        >
          star
        </i>
      </div>

      <a
        className=' waves-effect waves-light btn modal-trigger  cyan darken-3 '
        href='#modal1'
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
