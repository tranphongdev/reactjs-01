import { dataUser, iconSocial } from '~/constants';
import { Container, TextContentBox, TextDescription, TextHeading, TextName, TextTitle } from './Styled';

function Professional() {
    return (
        <section className="professional">
            <Container>
                <div className="professional-container">
                    <div className="professional-heading">
                        <TextHeading className="text-primary-title">Professional Teams</TextHeading>
                        <TextTitle className="text-title-professional">The Professional expert</TextTitle>
                        <TextDescription className="text-desc-professional">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                        </TextDescription>
                    </div>
                </div>

                <div className="professional-content">
                    <div className="row">
                        {dataUser?.map((user) => (
                            <div key={user?.id} className="col l-4 m-12 c-12 professional-main">
                                <img src={user?.avatar} className="img-professional" alt="" />
                                <TextHeading>{user?.title}</TextHeading>
                                <TextName>{user?.name}</TextName>
                                <TextContentBox>{user?.description}</TextContentBox>

                                <div className="socials">
                                    {iconSocial?.map((icon) => (
                                        <div key={icon?.id} className="social-item">
                                            <img src={icon?.icon} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Professional;
