import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className='p-4'>
        <h2 className='text-3xl btn-outline mb-3'>Login With</h2>
        <button className="btn btn-outline mr-2">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline">
          <FaGithub />
          Github
        </button>
      </div>

      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-3">Find us on</h2>
        <a href="" className='p-4 flex items-center text-sm border border-gray-800 rounded-t-lg'>
          <FaFacebook className='mr-3'></FaFacebook>
          <span>Facebook</span>
        </a>
        <a href="" className='p-4 flex items-center text-sm border-x border-gray-800'>
          <FaTwitter className='mr-3' />
          <span>Twitter</span>
        </a>
        <a href="" className='p-4 flex items-center text-sm border border-gray-800'>
          <FaInstagram className='mr-3' />
          <span>Instagram</span>
        </a>
      </div>

      {/*//* Q zone */}
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-3">Find us on</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;