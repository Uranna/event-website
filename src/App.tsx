import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './configs/theme';
import { Global } from './styled-component';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global />
		</ThemeProvider>
	);
}

export default App;
