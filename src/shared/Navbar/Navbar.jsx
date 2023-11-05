import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.png"
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-orange-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
            >
              <li>
                <NavLink 
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-400 underline font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/services"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-400 underline font-semibold" : ""
                  }
                >
                  Services
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-400 underline font-semibold" : ""
                  }
                >
                  Login
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Logout
                </NavLink>
              </li>


              <li>
              <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Dashboard
                </NavLink>

                <ul className="p-2">

                  <li>
                  <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Services
                </NavLink>
                  </li>

                  <li>
                  <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Add Services
                </NavLink>
                  </li>

                  <li>
                  <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  my Schedules
                </NavLink>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>

          <Link to="/">
            <img className=" h-[70px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-400 underline font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-400 underline font-semibold" : ""
                  }
                >
                  Services
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-400 underline font-semibold" : ""
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Logout
                </NavLink>
              </li>


            <li tabIndex={0}>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">


                  <li>
                  <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Services
                </NavLink>
                  </li>


                  <li>
                  <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Add Services
                </NavLink>
                  </li>

                  <li>
                  <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "w-[130px]"
                  }
                >
                  My Schedules
                </NavLink>
                  </li>

                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
