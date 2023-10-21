import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
   
    logOut()
      .then()
      .catch()
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"

        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"

        >
          Add Product
        </NavLink>
      </li>
    
      <li>
        <NavLink
          to="/about"

        >
          About
        </NavLink>
      </li>
    
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <Link to='/'> <img
          className="w-[230px]  hidden md:block lg:block"
          src="https://i.ibb.co/QNDg5ZB/cover-removebg-preview.png"
          alt=""
        /></Link>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center  hidden md:flex lg:flex  ">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end md:mt-[-10px] lg:mt-[-20px] ">

        {
        
        user? (
          <>
          <div className="flex gap-[10px]">
            <p className="mt-3">{user.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             
             <div className="w-10 rounded-full"><img src={user.photoURL} alt="" /></div>
           
           </label>
          </div>
            
            <button onClick={handleSignOut} className="btn btn-sm  btn-ghost">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}


      </div>
    </div>
  );
};

export default Navbar;
