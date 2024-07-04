import { Box, Button, Typography } from '@mui/material';
import SliderImage from '~/assets/SliderBg.svg';
import SliderBtnDot from '~/assets/slide-btn.svg';

function Slider() {
    return (
        <Box
            sx={{
                maxWidth: '1188px',
                margin: '0 auto',
                padding: '0 24px',
            }}
        >
            <Box
                sx={{
                    mt: '159px',
                    ml: { xs: '0', md: '39px' },
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    textAlign: { xs: 'center', md: 'start' },
                    gap: '12px',
                }}
            >
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            color: '#091156',
                            fontSize: '48px',
                            fontWeight: '600',
                        }}
                    >
                        Clinic & beauty <br /> consultant
                    </Typography>
                    <Typography
                        sx={{
                            color: '#091156',
                            fontWeight: '500',
                            mb: '28px',
                        }}
                    >
                        It is a long established fact that a reader will be by the readable content of a page.
                    </Typography>
                    <Button
                        sx={{
                            bgcolor: '#FF64AE',
                            color: 'white',
                            p: '14px 41px',
                            ':hover': { bgcolor: ' #e74d96' },
                        }}
                    >
                        More Details
                    </Button>
                </Box>
                <Box sx={{ minWidth: { xs: 'fit-content', md: '602px' }, height: '359px' }}>
                    <img src={SliderImage} alt="" style={{ width: '100%', height: '100%' }} />
                </Box>
            </Box>

            <Box
                sx={{
                    mt: '136px',
                    mb: '131px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img src={SliderBtnDot} alt="" />
            </Box>
        </Box>
    );
}

export default Slider;
