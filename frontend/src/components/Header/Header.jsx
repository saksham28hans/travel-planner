import React, { useState, useEffect,useContext } from 'react';
import { Container,Row,Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';
const nav_links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'My Tours',
  },
];
const Header = () => {
  const { user,dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  // const logout = () => {

  //   navigate('/');
  // };
  
  useEffect(() => {

  });

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-item-center gap-4">
                {false ? (
                  <>
                    <h5 style={{margin:'auto'}}>{user.username}</h5>
                    <Button className="btn btn-dark" onClick={()=>dispatch(logout())}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn primary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
            </Row>
          </Container>
    </header>
  );
};

export default Header;
