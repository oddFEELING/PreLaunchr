import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* ----- main app ----- */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
