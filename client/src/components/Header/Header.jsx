import React, {useRef,useState} from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';
import '../../styles/header.css';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/cars',
        display: 'Cars'
    },
    {
        path: '/purchases',
        display: 'Purchase'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
];
const Header = () => {

    
    const menuRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    // Toggle Main Menu
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    // Toggle User Dropdown Menu
    const toggleUserMenu = () => {
        console.log("Toggle Menu Clicked!");
        setShowMenu(!showMenu);
        console.log("showMenu State:", !showMenu);
    };

    const closeUserMenu = () => {
        setShowMenu(false);
    };
  return ( <header className='header'>

    {/* header top */}
    <div className="header__top">
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="6">
                        <div className="header__top__left">
                            <span>Need Help?</span>
                            <span className="header__top__help">
                                <i className="ri-phone-fill"></i> +84 123 456 789
                            </span>
                        </div>
                    </Col>

                    <Col lg="6" md="6" sm="6">
                        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                            {/* User Icon */}
                            <div className="user-menu">
                                <div
                                    onClick={toggleUserMenu}
                                    className="d-flex align-items-center gap-1 user-icon"
                                >
                                    <i className="ri-user-line"></i> User
                                </div>

                                {/* Dropdown Menu */}
                                <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
                                    <Link to="/profile" className="dropdown-item" onClick={closeUserMenu}>
                                        <i className="ri-user-fill"></i> Profile
                                    </Link>
                                    <hr style={{ margin: '0' }} />
                                    <Link to="/logout" className="dropdown-item" onClick={closeUserMenu}>
                                        <i className="ri-logout-box-r-line"></i> Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    {/* header middle */}
    <div className="header__middle">
        <Container>
            <Row>
                <Col lg='4' md='3'sm='4'>
                    <div className="logo">
                        <h1><Link to ='/home' className="d-flex align-items-center gap-2">
                        <i class='ri-car-line'></i>
                        <span>Rent Car <br /> Service</span>
                        </Link></h1>
                    </div>
                </Col>

                <Col lg='3' md='3' sm='4'>
                    <div className="header__location d-flex align-items-center gap-2">
                        <span><i class="ri-earth-line"></i></span>
                        <div className="header__location-content">
                            <h4>Vietnam</h4>
                            <h6>Hanoi City</h6>
                        </div>
                    </div>
                </Col>

                <Col lg='3' md='3' sm='4'>
                    <div className="header__location d-flex align-items-center gap-2">
                        <span><i class="ri-time-line"></i></span>
                        <div className="header__location-content">
                            <h4>All day</h4>
                            <h6>24h</h6>
                        </div>
                    </div>
                </Col>

                <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end">
                    <button className="header__btn btn">
                        <Link to='/contact'>
                            <i class="ri-phone-line"></i> Request a call
                        </Link>
                    </button>
                </Col>
            </Row>
        </Container>
    </div>
    {/* main navigation */}
    <div className="main__navbar">
        <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                <span className="mobile__menu">
                    <i class="ri-menu-line" onClick={toggleMenu}></i>
                </span>

                <div className="navigation " ref={menuRef} onClick={toggleMenu}>
                    <div className="menu">
                        {
                            navLinks.map((item,index)=>(
                                <NavLink to={item.path} className={(navClass)=>
                                    navClass.isActive ? "nav__active nav__item" :"nav__item"
                                } key={index}>{item.display}</NavLink>
                            ))
                        }
                    </div>
                </div>

                <div className="nav__right">
                        <div className="search__box">
                            <input type="text" placeholder="Search"></input>
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                </div>


            </div>
        </Container>
    </div>
  </header>
  );
}

export default Header;