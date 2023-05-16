import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/" data-testid="home-link">
        Home
      </NavLink>
      <NavLink to="/about" data-testid="about-link">
        About
      </NavLink>
      <NavLink to="/users" data-testid="users-link">
        Users
      </NavLink>
    </div>
  );
};
