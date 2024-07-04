import ContactAnimations from '../../assets/ContactAnimations.svg';
import bgcontact1 from '../../assets/bg-contact1.svg';
import bgcontact2 from '../../assets/bg-contact2.svg';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col l-6 m-6 c-12 contact-image">
                        <img src={ContactAnimations} alt="Contact Animations" />
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <div className="contact-heading">
                            <h4 className="text-primary-title">Contact Us</h4>
                            <p className="text-contact-title">
                                Send your inquiry to <br />
                                our expert team
                            </p>
                            <p className="text-desc-contact">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                        </div>

                        <div>
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
                                rows={7}
                                placeholder="Your inquiry here"
                                className="form-control"
                            ></textarea>

                            <a href="#" className="btn btn-contact">
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
        </section>
    );
};

export default Contact;
