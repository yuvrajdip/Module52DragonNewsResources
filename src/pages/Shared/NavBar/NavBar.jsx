import { Link, NavLink } from 'react-router-dom';
import useDefaultPic from '../../../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
  const { user , logOut } = useContext(AuthContext);

  const navLink = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/details">Details</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
  </>

  const handleLogOut = ()=> {
    console.log( 'Handle LogOut Button Clicked')
    
    // * logOut 
    logOut()
    .then(()=> console.log('Logged Out Successfully'))
    .catch((error)=>console.log(error.message))
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={useDefaultPic} />
                </div>
              </label>
              <Link to="/login">
                <button className='btn' onClick={handleLogOut}>Sign Out</button>
              </Link>
            </>
            :
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={useDefaultPic} />
                </div>
              </label>
              <Link to="/login">
                <button className='btn'>Login</button>
              </Link>
              <label htmlFor="">
                /
              </label>
              <Link to="/register">
                <button className='btn'>Register</button>
              </Link>
            </>
        }
      </div>
    </div>
  );
};

export default NavBar;