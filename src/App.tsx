import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //버전 6로 업그레이드 후, Switch->routes,component->element
import { loading } from 'assets/index';
import NotFound from 'pages/NotFound';

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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
