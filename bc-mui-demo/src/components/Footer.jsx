import FooterBG2 from '~/assets/FooterBG2.svg';
import logofooter from '~/assets/logo-footer.svg';
import caretRight from '~/assets/caret-right.svg';
import { iconSocialFooter, infoMenu, menuMobile } from '~/constants';
import { Box } from '@mui/material';

function Footer() {
    return (
        <footer className="footer">
            <Box className="bg-ft"></Box>
            <img className="bg-ft-top" src={FooterBG2} alt="Footer Background" />

            <Box>
                <Box
                    sx={{
                        maxWidth: '1188px',
                        margin: '0 auto',
                        padding: '0 24px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'center', md: 'start' },
                            gap: { xs: 2, md: 0 },
                            justifyContent: 'space-between',
                            margin: '225px 0 142px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'start' },
                                textAlign: 'center',
                            }}
                        >
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
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: { xs: '50px', md: '173px' },
                            }}
                        >
                            <Box>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        marginBottom: '24px',
                                        letterSpacing: '1.8px',
                                        color: 'white',
                                        fontWeight: '600',
                                    }}
                                >
                                    Pages
                                </h3>
                                <ul>
                                    {menuMobile?.map((menu) => (
                                        <li key={menu?.id}>
                                            <a
                                                href=""
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '11px',
                                                    gap: '8px',
                                                    color: '#D7DBFF',
                                                    letterSpacing: '1.6px',
                                                }}
                                            >
                                                <img src={caretRight} alt="" />
                                                {menu?.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Box>

                            <Box>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        marginBottom: '24px',
                                        letterSpacing: '1.8px',
                                        color: 'white',
                                        fontWeight: '600',
                                    }}
                                >
                                    Informations
                                </h3>
                                <ul>
                                    {infoMenu?.map((menu) => (
                                        <li key={menu?.id}>
                                            <a
                                                href=""
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: '11px',
                                                    gap: '8px',
                                                    color: '#D7DBFF',
                                                    letterSpacing: '1.6px',
                                                }}
                                            >
                                                <img src={caretRight} alt="" />
                                                {menu?.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: '8px',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '90px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '45px',
                            }}
                        >
                            {iconSocialFooter?.map((icon) => (
                                <img key={icon?.id} src={icon?.icon} alt="" />
                            ))}
                        </Box>
                        <p
                            style={{
                                color: '#D7DBFF',
                                letterSpacing: '1.6px',
                                fontWeight: '400',
                            }}
                        >
                            © AltDesain Studio 2021 - All right reserved.
                        </p>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
}

export default Footer;
