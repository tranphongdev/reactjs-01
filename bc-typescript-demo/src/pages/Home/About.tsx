import AboutBg from '../../assets/about-bg.png';
import BtnPlay from '../../assets/btn-play.svg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col l-6 m-6 c-12 about-content">
                        <h3 className="text-primary-title">About Us</h3>
                        <p className="text-desc-about">We are the best beauty clinic</p>
                        <p className="text-desc-about-sub">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.
                            Varius tellus in suspendisse placerat.
                        </p>
                        <br />
                        <p className="text-desc-about-sub">
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </p>

                        <div className="about-group-btn">
                            <a href="#" className="btn btn-about">
                                Learn More
                            </a>
                            <button className="btn-watch">
                                <img src={BtnPlay} alt="Play Button" /> Watch Video
                            </button>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12 about-image">
                        <img src={AboutBg} alt="About Background" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
