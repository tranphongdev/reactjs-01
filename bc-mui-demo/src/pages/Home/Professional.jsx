import Box from '@mui/material/Box';
import { iconSocial, dataUser } from '~/constants';

function Professional() {
    return (
        <Box
            sx={{
                maxWidth: '1188px',
                margin: '0 auto',
                padding: '0 24px',
            }}
        >
            <Box
                sx={{
                    maxWidth: '848px',
                    margin: '0 auto 87px',
                    textAlign: 'center',
                }}
            >
                <h4 className="text-heading">Professional Teams</h4>
                <p className="text-title">The Professional expert</p>
                <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {dataUser?.map((data) => (
                    <Box
                        key={data?.id}
                        sx={{
                            padding: '0 77px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        className="box-services-item"
                    >
                        <Box sx={{ padding: '91px 0 53px' }}>
                            <img src={data?.avatar} alt="" />
                        </Box>
                        <Box>
                            <span className="text-heading">{data?.title}</span>
                            <p style={{ fontSize: '18px', margin: 0 }} className="text-title">
                                {data?.name}
                            </p>
                            <p className="text-desc">{data?.description}</p>

                            <Box
                                sx={{ mt: '50px', display: 'flex', justifyContent: 'center', gap: '34px', mb: '96px' }}
                            >
                                {iconSocial?.map((icon) => (
                                    <Box key={icon.id} className="social-item">
                                        <img src={icon.icon} alt="" />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Professional;
