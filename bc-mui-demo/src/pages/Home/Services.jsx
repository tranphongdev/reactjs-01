import { Box, Typography } from '@mui/material';
import { dataServices } from '~/constants';

import BgAbout from '~/assets/bg-body3.png';
import BgAbout1 from '~/assets/bg-body4.png';

function Services() {
    return (
        <Box className="services">
            <Box
                sx={{
                    maxWidth: '1188px',
                    margin: '0 auto',
                    padding: '0 24px',
                }}
            >
                <Box
                    sx={{
                        width: { xs: 'fit-content', md: ' 848px' },
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: '0 auto 82px',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                        className="text-heading"
                        sx={{
                            fontSize: '16px',
                        }}
                    >
                        Main Services
                    </Typography>
                    <p className="text-title">
                        Learn services to focus <br /> on your beauty
                    </p>
                    <p className="text-desc">
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </p>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { md: 'start', xs: 'center' },
                        gap: { xs: 5, md: 0 },
                    }}
                >
                    {dataServices?.map((user) => (
                        <Box
                            key={user?.id}
                            className="box-item"
                            sx={{ p: ' 0 35px', maxWidth: '343px', height: '458px' }}
                        >
                            <Box
                                sx={{
                                    width: '166px',
                                    height: '166px',
                                    margin: '59px 0',
                                }}
                            >
                                <img src={user?.avatar} alt="" />
                            </Box>
                            <Box
                                sx={{
                                    mb: '52px',
                                }}
                            >
                                <span className="box-title">{user?.title}</span>
                                <p className="box-desc">{user?.description}</p>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className="services-bg">
                <img src={BgAbout} alt="Background About" />
                <img className="bg-service-item" src={BgAbout1} alt="Background About 1" />
            </Box>
        </Box>
    );
}

export default Services;
