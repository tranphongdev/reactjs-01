import Box from '@mui/material/Box';
import { iconSocial, dataUser } from '~/constants';
import { BoxProfessionalUser, BoxSocialsIcon, ContainerBox, ProfessionalBox } from './Styled';
import tw from 'twin.macro';

function Professional() {
    return (
        <ContainerBox>
            <ProfessionalBox>
                <h4 className="text-heading">Professional Teams</h4>
                <p className="text-title">The Professional expert</p>
                <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </ProfessionalBox>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {dataUser?.map((data) => (
                    <BoxProfessionalUser key={data?.id} className="box-services-item">
                        <Box sx={{ padding: '91px 0 53px', margin: 'auto' }}>
                            <img src={data?.avatar} alt="" />
                        </Box>
                        <Box>
                            <span className="text-heading">{data?.title}</span>
                            <p style={{ fontSize: '18px', margin: '12px 0' }} className="text-title">
                                {data?.name}
                            </p>
                            <p className="text-desc">{data?.description}</p>

                            <BoxSocialsIcon>
                                {iconSocial?.map((icon) => (
                                    <Box key={icon.id} className="social-item">
                                        <img src={icon.icon} alt="" />
                                    </Box>
                                ))}
                            </BoxSocialsIcon>
                        </Box>
                    </BoxProfessionalUser>
                ))}
            </Box>
        </ContainerBox>
    );
}

export default Professional;
