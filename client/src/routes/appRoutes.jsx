import HomePage from "../pages/home/HomePage"
import ChanelPage from "../pages/chanel/Chanel"
import NotFound from "../pages/NotFound/NotFound"


const appRoutes = [
  {
    path: '/',
    index: true,
    element: <HomePage/>,
    state: "home"
  },
  {
    path: '/chanel/*',
    index: true,
    element: <ChanelPage/>,
    state: "home"
  },
  {
    path: '*',
    element: <NotFound/>,
    state: "not-found"
  }
]

export default appRoutes