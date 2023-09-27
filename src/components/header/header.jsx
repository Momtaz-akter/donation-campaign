import { NavLink } from 'react-router-dom';
import Logo from './logo';

const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="flex-1">
        <a className="">
          <Logo />
        </a>
      </div>
      <div className="flex-none">
        <ul className=" menu-horizontal px-1 gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-red-600 font-medium'
                  : 'text-gray-600 font-medium'
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-red-600 font-medium'
                  : 'text-gray-600 font-medium'
              }>
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-red-600 font-medium'
                  : 'text-gray-600 font-medium'
              }>
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
