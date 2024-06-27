import HomePage from "../pages/home/HomePage"
import NotFound from "../pages/NotFound/NotFound"


const appRoutes = [
  {
    path: '/',
    index: true,
    element: <HomePage/>,
    state: "home"
  },
  {
    path: '*',
    element: <NotFound/>,
    state: "not-found"
  }
]

export default appRoutes