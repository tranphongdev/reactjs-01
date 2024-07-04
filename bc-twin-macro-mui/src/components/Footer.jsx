import FooterBG2 from '~/assets/FooterBG2.svg';
import logofooter from '~/assets/logo-footer.svg';
import caretRight from '~/assets/caret-right.svg';
import { iconSocialFooter, infoMenu, menuMobile } from '~/constants';
import { Box } from '@mui/material';
import { BoxBgrNavi, BoxFlex, BoxFooterTop, BoxTopLeft, ContainerBox, FooterBottom } from './Styled';
import styled from 'styled-components';

const TitleHeading = styled.h3`
    font-size: 18px;
    margin-bottom: 24px;
    letter-spacing: 1.8px;
    color: white;
    font-weight: 600;
`;

const TitleFooter = styled.h3`
    font-size: 18px;
    margin-bottom: 24px;
    letter-spacing: 1.8px;
    color: white;
    font-weight: 600;
`;

const LinkMenu = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    gap: 8px;
    color: #d7dbff;
    letter-spacing: 1.6px;
`;

function Footer() {
    return (
        <footer className="footer">
            <BoxBgrNavi />
            <img className="bg-ft-top" src={FooterBG2} alt="Footer Background" />

            <Box>
                <ContainerBox>
                    <BoxFooterTop
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'center', md: 'start' },
                            gap: { xs: 2, md: 0 },
                        }}
                    >
                        <BoxTopLeft sx={{ alignItems: { xs: 'center', md: 'start' } }}>
                            <Box>
                                <img src={logofooter} alt="" />
                            </Box>
                            <p className="text-desc-left">
                                <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                            </p>

                            <p className="footer-address">Baker Steet 101, NY, United States.</p>
                            <p className="footer-contact">
                                <span>+521 569 8966.</span> <span>mail@company.com.</span>
                            </p>
                        </BoxTopLeft>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: { xs: '50px', md: '173px' },
                            }}
                        >
                            <Box>
                                <TitleFooter>Pages</TitleFooter>
                                <ul>
                                    {menuMobile?.map((menu) => (
                                        <li key={menu?.id}>
                                            <LinkMenu href="">
                                                <img src={caretRight} alt="" />
                                                {menu?.name}
                                            </LinkMenu>
                                        </li>
                                    ))}
                                </ul>
                            </Box>

                            <Box>
                                <TitleHeading>Informations</TitleHeading>
                                <ul>
                                    {infoMenu?.map((menu) => (
                                        <li key={menu?.id}>
                                            <LinkMenu href="">
                                                <img src={caretRight} alt="" />
                                                {menu?.name}
                                            </LinkMenu>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </BoxFooterTop>

                    <FooterBottom sx={{ flexDirection: { xs: 'column', md: 'row' }, mt: '140px' }}>
                        <BoxFlex>
                            {iconSocialFooter?.map((icon) => (
                                <img key={icon?.id} src={icon?.icon} alt="" />
                            ))}
                        </BoxFlex>
                        <p
                            style={{
                                color: '#D7DBFF',
                                letterSpacing: '1.6px',
                                fontWeight: '400',
                            }}
                        >
                            © AltDesain Studio 2021 - All right reserved.
                        </p>
                    </FooterBottom>
                </ContainerBox>
            </Box>
        </footer>
    );
}

export default Footer;
