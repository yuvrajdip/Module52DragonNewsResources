import React from 'react';
import Header from './Shared/Header/Header';
import NavBar from './Shared/NavBar/NavBar';
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='border-2'>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className='lg:col-span-2 border-2'>
          <h2 className='font-poppins font-bold text-5xl'>This is Home</h2>
        </div>
        <div className='border-2'>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;