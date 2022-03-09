import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './i18n/i18n';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<span>Loading...</span>}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
);
