import React, { useContext, useEffect } from 'react';
import Members from '../member/Members';
import MembersContext from '../../context/members/membersContext';
import Preloader from '../layout/Preloader';

const About = () => {
  const membersContext = useContext(MembersContext);
  const { getMembers, loading, members, error, member } = membersContext;
  useEffect(() => {
    getMembers();
    //eslint-disable-next-line
  }, [member]);
  if (members !== null && members.length === 0 && !loading) {
    return <h4>No Current Members</h4>;
  }
  return (
    <div className='flexbox  container bg-white wrapper'>
      <div className='pt-8 flex justify-center text-xl  '>
        Official Website of The Aeromodelling Club
      </div>
      <div className='text-6xl text-center font-bold pt-24'>Members</div>
      <div className='pt-10 pb-40 mx-16'>
        {members !== null && !loading ? (
          <div className=' border-4 border-black rounded-lg shadow-2xl'>
            <div className='m-1 pt-10 pb-40  border-2 border-black rounded-lg shadow-2xl'>
              <Members members={members} error={error} />
            </div>
          </div>
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default About;
