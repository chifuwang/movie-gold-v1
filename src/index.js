import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { createBrowserHistory} from 'history';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory({ basename: '/second'})

root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/second'}>
    <Routes>
      <Route history={history} path="/*" element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

