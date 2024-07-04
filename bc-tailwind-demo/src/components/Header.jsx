import { useState } from 'react';
import logo from '~/assets/logo-header.svg';
import PlusIcon from '~/assets/PlusIcon.svg';
import { menuMobile } from '~/constants';

function Header() {
    const [openMobile, setOpenMobile] = useState(false);

    const handleOpenMenu = () => {
        setOpenMobile(!openMobile);
    };

    return (
        <header className="max-w-[1170px] h-[63px] px-[15px] m-auto flex justify-between items-center mb-[159px] mt-[45px]">
            <img src={logo} alt="" className="w-[258px]" />

            {/* Button Bars */}
            <button
                onClick={() => handleOpenMenu()}
                className="lg:hidden block w-[50px] h-[50px] text-xl rounded border border-[var(--primary)] text-[var(--primary)] bg-white hover:text-white hover:bg-[var(--primary)] transition-colors"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Menu mobile */}
            {openMobile && (
                <div className={`lg:hidden block menu-mobile ${openMobile ? 'menu-mobile-active' : ''}`}>
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
            )}

            <div className="hidden lg:flex items-center gap-[93px]">
                <ul className="flex items-center gap-[46px]">
                    <li>
                        <a href="" className="flex gap-1 font-medium text-[var(--blue-navi-dark)]">
                            Home <img src={PlusIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[var(--gray)]">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[var(--gray)]">
                            Service
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[var(--gray)]">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[var(--gray)]">
                            Blog
                        </a>
                    </li>
                </ul>

                <button className="btn py-[14px] px-[41px]">Contact</button>
            </div>
        </header>
    );
}

export default Header;
