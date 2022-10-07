import 'antd/dist/antd.css';
import './theme/index.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  Router,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { IntlProvider } from 'react-intl';
import en_lang from './i18n/en.json';
import { AuthProvider } from './context/auth';
import ProtectedRoute from './pages/ProtectedRoute';
import ApiTest from './pages/Tests/ApiTest';

function App() {
  const DashboardRoute = () =>
    useRoutes([
      {
        path: '/',
        element: <ProtectedRoute>{Dashboard}</ProtectedRoute>,
      },
      {
        path: '/Dashboard',
        element: <ProtectedRoute>{Dashboard}</ProtectedRoute>,
      },
    ]);

  return (
    <IntlProvider messages={en_lang} locale="en">
      <AuthProvider>
        <BrowserRouter>
          <DashboardRoute />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="pages/apitest"
              element={<ProtectedRoute>{ApiTest}</ProtectedRoute>}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </IntlProvider>
  );
}

export default App;
