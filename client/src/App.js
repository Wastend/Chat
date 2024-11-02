import './styles/common/App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react';
import AuthPage from './pages/auth/AuthPage';
import PageWrapper from "./components/PageWrapper/PageWrapper";
import appRoutes from "./routes/appRoutes";

function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <BrowserRouter>
      {
        isAuth === false ?
          <Routes>
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
