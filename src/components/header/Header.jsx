import React from 'react';
import { useCurrentUser } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const AuthLinks = () => (
  <div>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
  </div>
);
const Header = () => {
  const currentUser = useCurrentUser();
  return (
    <div>
      {currentUser
        ? <div><img src={currentUser.profileImage} /></div>
        : <AuthLinks />}
    </div>
  );
};
export default Header;
