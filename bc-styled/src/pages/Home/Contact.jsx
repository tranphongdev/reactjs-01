import ContactAnimations from '~/assets/ContactAnimations.svg';
import bgcontact1 from '~/assets/bg-contact1.svg';
import bgcontact2 from '~/assets/bg-contact2.svg';
import { Box, Container, TextDescription, TextHeading, TextTitle } from './Styled';

function Contact() {
    return (
        <section className="contact">
            <Container>
                <div className="row">
                    <div className="col l-6 m-6 c-12 contact-image">
                        <img src={ContactAnimations} alt="" />
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <div className="contact-heading">
                            <TextHeading>Contact Us</TextHeading>
                            <TextTitle className="text-contact-title">
                                Send your inquiry to <br />
                                our expert team
                            </TextTitle>
                            <TextDescription className="text-desc-contact">
                                Lorem ipsum dolor sit amet nulla turapis tellus.
                            </TextDescription>
                        </div>

                        <Box style={{ marginTop: '44px' }}>
                            <div className="row">
                                <div className="col l-6 m-6 c-12">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col l-6 m-6 c-12">
                                    <input className="form-control" type="text" placeholder="Last name" />
                                </div>
                            </div>

                            <input type="text" className="form-control" placeholder="Email address" />

                            <input type="text" className="form-control" placeholder="Subject message" />

                            <textarea
                                name=""
                                id=""
                                rows="7"
                                placeholder="Your inquiry here"
                                className="form-control"
                            ></textarea>

                            <a href="#" className="btn btn-contact">
                                Send Message
                            </a>
                        </Box>
                    </div>
                </div>
            </Container>

            <Box className="contact-bg">
                <img src={bgcontact1} alt="" />
                <img className="contact-bg-item" src={bgcontact2} alt="" />
            </Box>
        </section>
    );
}

export default Contact;
