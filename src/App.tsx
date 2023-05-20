import React from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { theme } from './configs/theme';
import { Global } from './styled-component';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<Header />
			<Main />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
