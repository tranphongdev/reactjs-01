import ServiceBg from '../../assets/service1.svg';
import ServiceBg2 from '../../assets/service2.svg';
import ServiceBg3 from '../../assets/service3.svg';
import BgAbout from '../../assets/bg-body3.png';
import BgAbout1 from '../../assets/bg-body4.png';

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services-container">
                    <div className="services-heading">
                        <h4 className="text-primary-title">Main Services</h4>
                        <p>
                            Learn services to focus <br />
                            on your beauty
                        </p>
                    </div>
                    <p className="services-desc">
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </p>
                </div>

                <div className="row" style={{ justifyContent: 'space-between', gap: '47px' }}>
                    <div className="col l-4 m-12 c-12 services-item">
                        <div className="service-img">
                            <img src={ServiceBg} alt="Service Background 1" />
                        </div>
                        <div className="services-item-content">
                            <span>Beauty consultation</span>
                            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 services-item">
                        <div className="service-img">
                            <img src={ServiceBg2} alt="Service Background 2" />
                        </div>
                        <div className="services-item-content">
                            <span>Skin treatments</span>
                            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 services-item">
                        <div className="service-img">
                            <img src={ServiceBg3} alt="Service Background 3" />
                        </div>
                        <div className="services-item-content">
                            <span>Beauty product</span>
                            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-bg">
                <img src={BgAbout} alt="Background About" />
                <img className="bg-service-item" src={BgAbout1} alt="Background About 1" />
            </div>
        </section>
    );
};

export default Services;
