import HomePage from "../pages/home/HomePage"
import ChanelPage from "../pages/chanel/Chanel"
import NotFound from "../pages/NotFound/NotFound"


const appRoutes = [
  {
    path: '/',
    index: true,
    element: <HomePage/>,
    title:"WChat",
  },
  {
    path: '/chanel/*',
    index: true,
    element: <ChanelPage/>,
    title: "Chanel",
  },
  {
    path: '*',
    element: <NotFound/>,
    title:"Page not founded",
  }
]

export default appRoutes