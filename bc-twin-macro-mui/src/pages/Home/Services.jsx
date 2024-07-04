import { Box, Typography } from '@mui/material';

import BgAbout from '~/assets/bg-body3.png';
import BgAbout1 from '~/assets/bg-body4.png';
import { dataServices } from '~/constants';
import { BoxImgService, BoxServiceHeading, BoxUserService, ContainerBox } from './Styled';

function Services() {
    return (
        <Box className="services">
            <ContainerBox>
                <BoxServiceHeading sx={{ width: { xs: 'fit-content', md: ' 848px' } }}>
                    <h3 className="text-heading">Main Services</h3>
                    <p className="text-title">
                        Learn services to focus <br /> on your beauty
                    </p>
                    <p className="text-desc">
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </p>
                </BoxServiceHeading>

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
                        <BoxUserService key={user?.id} className="box-item">
                            <BoxImgService>
                                <img src={user?.avatar} alt="" />
                            </BoxImgService>
                            <Box sx={{ mb: '52px' }}>
                                <span className="box-title">{user?.title}</span>
                                <p className="box-desc">{user?.description}</p>
                            </Box>
                        </BoxUserService>
                    ))}
                </Box>
            </ContainerBox>
            <Box className="services-bg">
                <img src={BgAbout} alt="Background About" />
                <img className="bg-service-item" src={BgAbout1} alt="Background About 1" />
            </Box>
        </Box>
    );
}

export default Services;
