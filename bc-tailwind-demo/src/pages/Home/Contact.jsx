import ContactAnimations from '../../assets/ContactAnimations.svg';
import bgcontact1 from '../../assets/bg-contact1.svg';
import bgcontact2 from '../../assets/bg-contact2.svg';

function Contact() {
    return (
        <div className="contact">
            <div className="wrapper">
                <div className="flex lg:flex-row flex-col justify-between items-center">
                    <div className="lg:w-fit w-full">
                        <img src={ContactAnimations} alt="" className="w-full" />
                    </div>

                    <div className="lg:w-fit w-full">
                        <div className="text-center lg:text-left">
                            <h4 className="text-heading">Contact Us</h4>
                            <p className="text-title">
                                Send your inquiry to <br /> our expert team
                            </p>
                            <p className="text-desc">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                        </div>

                        <div className="mt-[44px]">
                            <div className="flex lg:flex-row flex-col items-center gap-0 lg:gap-[36px]">
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

                            <a href="#" className="btn py-4 px-[38px] w-[248px]">
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-bg">
                <img src={bgcontact1} alt="Background Contact 1" />
                <img className="contact-bg-item" src={bgcontact2} alt="Background Contact 2" />
            </div>
        </div>
    );
}

export default Contact;
