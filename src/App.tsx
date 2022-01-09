import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //버전 6로 업그레이드 후, Switch->routes,component->element
import { loading } from 'assets/index';
import NotFound from 'pages/NotFound';
import Record from 'pages/Record';
import History from 'pages/History';
import Header from 'components/Header';

const Login = lazy(() => import('pages/Login'));

function App() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <img width={130} src={loading} alt="loading" />
        </div>
      }
    >
      <BrowserRouter>
        <Header />
        {/* header 불필요한 곳 수정필요 */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/record" element={<Record />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
