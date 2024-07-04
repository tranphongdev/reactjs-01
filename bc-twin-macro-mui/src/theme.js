import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    gap: '4px',
                    borderRadius: '50px',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins',
                },
            },
        },
    },
});

export default theme;
