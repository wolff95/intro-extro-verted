import './Navbar.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <nav>
      <div className='logo' onClick={backToHome}>
        <div>
          <span className='intro'>intro</span>
          <span className='extro'>extro</span>
        </div>
        <span className='verted'>verted</span>
      </div>
    </nav>
  );
};

export default Navbar;
