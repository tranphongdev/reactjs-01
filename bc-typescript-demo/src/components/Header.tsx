import { useState } from 'react';
import Logo from '../assets/logo.svg';
import Plus from '../assets/icon-plus.png';
import { menuMobile } from '../constants';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="container">
            <header className="header">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className={`menu-mobile ${openMenu ? 'show' : ''}`}>
                    <p className="mobile-menu-close" onClick={handleOpenMenu}>
                        <i className="fa-solid fa-xmark"></i>
                    </p>
                    <ul className="list-menu-mobile">
                        <li>
                            <a href="#" className="mobile-menu-link-logo">
                                Beautice Clinic
                            </a>
                        </li>

                        {menuMobile?.map((menu) => (
                            <li key={menu?.id}>
                                <a href="#" className="mobile-menu-link">
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="header-main">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="#" className="menu-link menu-link-active">
                                Home <img src={Plus} alt="Plus Icon" />
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                About
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                Service
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                Gallery
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                Blog
                            </a>
                        </li>
                    </ul>

                    <a href="#" className="btn btn-header">
                        Contact
                    </a>

                    <button className="btn-menu-mobile" onClick={handleOpenMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
