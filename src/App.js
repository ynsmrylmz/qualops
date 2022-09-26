import 'antd/dist/antd.css';
import './theme/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import { IntlProvider, useIntl} from 'react-intl';
import en_lang from './i18n/en.json';

function App() {
  return (
    <IntlProvider messages={en_lang} locale="en">
      <BrowserRouter>
      <Routes>      
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
