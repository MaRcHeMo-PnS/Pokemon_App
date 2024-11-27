// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { NameProvider } from './contexts/nameContext.jsx';

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<NameProvider>
		<HashRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<AppRoutes />,
		</HashRouter>
	</NameProvider>,
	//  </StrictMode>
);
