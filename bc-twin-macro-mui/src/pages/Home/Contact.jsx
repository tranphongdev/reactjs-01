import Box from '@mui/material/Box';
import ContactAnimations from '~/assets/ContactAnimations.svg';
import bgcontact1 from '~/assets/bg-contact1.svg';
import bgcontact2 from '~/assets/bg-contact2.svg';
import { ButtonCustom, ContainerBox } from './Styled';

function Contact() {
    return (
        <Box className="contact">
            <ContainerBox
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ width: { xs: '100%', md: '520px' } }}>
                    <img src={ContactAnimations} alt="ContactAnimations" style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '520px' }, textAlign: { xs: 'center', md: 'start' } }}>
                    <h3 className="text-heading">Contact Us</h3>
                    <p className="text-title">
                        Send your inquiry to <br /> our expert team
                    </p>
                    <p className="text-desc" style={{ margin: 0 }}>
                        Lorem ipsum dolor sit amet nulla turapis tellus.
                    </p>
                    <Box sx={{ mt: '44px' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: { xs: '0', md: '36px' },
                                flexDirection: { xs: 'column', md: 'row' },
                            }}
                        >
                            <input type="text" className="form-control" placeholder="First name" />
                            <input className="form-control" type="text" placeholder="Last name" />
                        </Box>
                        <input type="text" className="form-control" placeholder="Email address" />

                        <input type="text" className="form-control" placeholder="Subject message" />

                        <textarea
                            name=""
                            id=""
                            rows={7}
                            placeholder="Your inquiry here"
                            className="form-control"
                        ></textarea>

                        <ButtonCustom sx={{ ml: 0 }}>Send Message</ButtonCustom>
                    </Box>
                </Box>
            </ContainerBox>

            <Box className="contact-bg">
                <img src={bgcontact1} alt="Background Contact 1" />
                <img className="contact-bg-item" src={bgcontact2} alt="Background Contact 2" />
            </Box>
        </Box>
    );
}

export default Contact;
