import tw from 'twin.macro';
import { useState } from 'react';

import Button from '~/components/Button';
import logo from '~/assets/logo-header.svg';
import PlusIcon from '~/assets/PlusIcon.svg';
import { menuMobile } from '~/constants';
import { ButtonBar, HeaderStyled, ImgLogo } from '~/components/Styled';

function Header() {
    const [openMobile, setOpenMobile] = useState(false);

    const handleOpenMenu = () => {
        setOpenMobile(!openMobile);
    };

    return (
        <HeaderStyled>
            <ImgLogo src={logo} alt="" />

            {/* Button Bars */}
            <ButtonBar onClick={() => handleOpenMenu()}>
                <i className="fa-solid fa-bars"></i>
            </ButtonBar>

            {/* Menu mobile */}
            {openMobile && (
                <div css={[tw`lg:hidden block`]} className={`menu-mobile ${openMobile ? 'menu-mobile-active' : ''}`}>
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

            <div css={[tw`hidden lg:flex items-center gap-[93px]`]}>
                <ul css={[tw`flex items-center gap-[46px]`]}>
                    {menuMobile?.map((menu, index) => (
                        <div key={menu?.id}>
                            {index === 0 ? (
                                <li>
                                    <a href="" css={[tw`flex gap-1 font-medium text-[var(--blue-navi-dark)]`]}>
                                        {menu?.name} <img src={PlusIcon} alt="" />
                                    </a>
                                </li>
                            ) : (
                                <li>
                                    <a
                                        href=""
                                        css={[
                                            tw`text-[var(--gray)] hover:text-[var(--blue-navi-dark)] transition-colors`,
                                        ]}
                                    >
                                        {menu?.name}
                                    </a>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>

                <Button color="pink">Contact</Button>
            </div>
        </HeaderStyled>
    );
}

export default Header;
