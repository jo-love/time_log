import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //버전 6로 업그레이드 후, Switch->routes,component->element
import PrivateRoute from 'routes/PrivateRoute';
import { loading } from 'assets/index';

const Login = lazy(() => import('pages/Login'));
const Record = lazy(() => import('pages/Record'));
const History = lazy(() => import('pages/History'));
const NotFound = lazy(() => import('pages/NotFound'));

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
          <Route
            path="/record"
            element={
              <PrivateRoute>
                <Record />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
