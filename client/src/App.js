import './styles/common/App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react';
import AuthPage from './pages/auth/AuthPage';
import PageWrapper from "./components/PageWrapper/PageWrapper";
import appRoutes from "./routes/appRoutes";
import RegisterPage from './pages/register/RegisterPage';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  // const [isAuth, setIsAuth] = useState(10)

  return (
    <BrowserRouter>
      {
        isAuth === null ?
          <Routes>
            <Route
              path='/register'
              element={<RegisterPage setIsAuth={setIsAuth} />}
            />
            <Route
              path='*'
              element={<AuthPage setIsAuth={setIsAuth} />}
            />
          </Routes>
          :
          <Routes>
            {
              appRoutes.map((route, index) => (
                <Route
                  index
                  path={route.path}
                  element={<PageWrapper title={route.title}>
                    {route.element}
                  </PageWrapper>}
                  key={index}
                />
              ))
            }
          </Routes>
      }

    </BrowserRouter>
  );
}

export default App;
