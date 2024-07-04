import AboutBg from '~/assets/about-bg.png';
import BtnPlay from '~/assets/btn-play.svg';
import { BtnWatch, Container, TextDescription, TextHeading, TextTitle } from './Styled';

function About() {
    return (
        <section className="about" style={{ marginTop: ' 135px' }}>
            <Container>
                <div className="row">
                    <div className="col l-6 m-6 c-12">
                        <TextHeading className="text-primary-title">About Us</TextHeading>
                        <TextTitle className="text-desc-about">We are the best beauty clinic</TextTitle>
                        <TextDescription className="text-desc-about-sub">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.
                            Varius tellus in suspendisse placerat.
                        </TextDescription>
                        <br />
                        <TextDescription className="text-desc-about-sub">
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </TextDescription>

                        <div className="about-group-btn">
                            <a href="#" className="btn btn-about">
                                Learn More
                            </a>
                            <BtnWatch>
                                <img src={BtnPlay} alt="" /> Watch Video
                            </BtnWatch>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12 about-image">
                        <img src={AboutBg} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;
