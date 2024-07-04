import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <CssVarsProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <App />
            </Router>
        </CssVarsProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
