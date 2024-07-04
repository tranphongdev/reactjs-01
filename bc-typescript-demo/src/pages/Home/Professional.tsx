import { dataUser, iconSocial } from '../../constants';

const Professional = () => {
    return (
        <section className="professional">
            <div className="container">
                <div className="professional-container">
                    <div className="professional-heading">
                        <h4 className="text-primary-title">Professional Teams</h4>
                        <p className="text-title-professional">The Professional expert</p>
                        <p className="text-desc-professional">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                        </p>
                    </div>
                </div>

                <div className="professional-content">
                    <div className="row">
                        {dataUser?.map((user) => (
                            <div key={user.id} className="col l-4 m-12 c-12 professional-main">
                                <img src={user.avatar} className="img-professional" alt={user.name} />
                                <h3 className="text-primary-title">{user.title}</h3>
                                <span className="text-name">{user.name}</span>
                                <p className="item-desc">{user.description}</p>

                                <div className="socials">
                                    {iconSocial?.map((icon) => (
                                        <div key={icon.id} className="social-item">
                                            <img src={icon.icon} alt="Social Icon" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;
