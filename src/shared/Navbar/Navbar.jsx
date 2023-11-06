import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { user,userLogOut } = useAuth();

  return (
    <div>
      <div className="navbar bg-orange-50">
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
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-orange-400 underline font-semibold"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-orange-400 underline font-semibold"
                      : ""
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-orange-400 underline font-semibold"
                      : ""
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
                    isPending ? "pending" : isActive ? "active" : "z-10"
                  }
                >
                  Dashboard
                </NavLink>

                <ul className="p-2">
                  <li>
                    <NavLink
                      to="/messages"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "z-10"
                      }
                    >
                      My Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/add-services"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "z-10"
                      }
                    >
                      Add Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/messages"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "z-10"
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
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-400 underline font-semibold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-400 underline font-semibold"
                    : ""
                }
              >
                Services
              </NavLink>
            </li>

            
              <li className={user && "hidden"}>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-orange-400 underline font-semibold"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            

            <li className={user ? "display" : "hidden"}>
              <button onClick={()=>userLogOut()}>Logout</button>
            </li>

            <li tabIndex={0} className={`${user ? 'visible' : 'hidden'}`}>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                  <li>
                    <NavLink
                      to="/messages"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : "z-10 bg-gray-100 hover:bg-gray-300"
                      }
                    >
                      My Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/add-services"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : "z-10 bg-gray-100 hover:bg-gray-300"
                      }
                    >
                      Add Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/messages"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : "w-[130px] z-10 bg-gray-100 hover:bg-gray-300"
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
          {user?.email && (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          )}
          {user?.email && (
            <h1 className="font-bold italic">{user.displayName}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
