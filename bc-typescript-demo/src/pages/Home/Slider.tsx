import BgSlider from '../../assets/bg-slider.png';

const Slider = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col l-6 m-6 c-12">
                    <div className="slider-content">
                        <h1 className="text-heading">
                            Clinic & beauty <br />
                            consultant
                        </h1>
                        <p className="text-desc-heading">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page.
                        </p>
                        <a href="#" className="btn btn-slider">
                            More Details
                        </a>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12">
                    <div className="slider-image">
                        <img src={BgSlider} alt="Background Slider" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
