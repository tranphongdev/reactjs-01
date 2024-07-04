import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: '"Poppins", sans-serif',
                    scrollBehavior: 'smooth',
                    backgroundImage: "url('/src/assets/bg-body.png'), url('/src/assets/bg-body2.png')",
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundSize: '1213px 711px, 1266px 743px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    gap: '4px',
                    fontFamily: '"Poppins", sans-serif',
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
                    fontFamily: '"Poppins", sans-serif',
                },
            },
        },
    },
});

export default theme;
