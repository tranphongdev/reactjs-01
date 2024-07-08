import ContactAnimations from '~/assets/ContactAnimations.svg';
import bgcontact1 from '~/assets/bg-contact1.svg';
import bgcontact2 from '~/assets/bg-contact2.svg';
import { BoxContact, BoxContainer } from './Styled';
import Button from '~/components/Button';
import tw from 'twin.macro';

function Contact() {
    return (
        <div className="contact">
            <BoxContainer>
                <BoxContact>
                    <div tw="w-full">
                        <img src={ContactAnimations} alt="" tw="w-full" />
                    </div>

                    <div tw="w-full">
                        <div css={[tw`text-center lg:text-left`]}>
                            <h4 className="text-heading">Contact Us</h4>
                            <p className="text-title">
                                Send your inquiry to <br /> our expert team
                            </p>
                            <p className="text-desc">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                        </div>

                        <div css={[tw`mt-[44px]`]}>
                            <div css={[tw`flex lg:flex-row flex-col items-center gap-0 lg:gap-[36px]`]}>
                                <input type="text" className="form-control" placeholder="First name" />
                                <input className="form-control" type="text" placeholder="Last name" />
                            </div>

                            <input type="text" className="form-control" placeholder="Email address" />

                            <input type="text" className="form-control" placeholder="Subject message" />

                            <textarea
                                name=""
                                id=""
                                rows={7}
                                placeholder="Your inquiry here"
                                className="form-control"
                            ></textarea>

                            <Button color="pink">Send Message</Button>
                        </div>
                    </div>
                </BoxContact>
            </BoxContainer>

            <div className="contact-bg">
                <img src={bgcontact1} alt="Background Contact 1" />
                <img className="contact-bg-item" src={bgcontact2} alt="Background Contact 2" />
            </div>
        </div>
    );
}

export default Contact;
