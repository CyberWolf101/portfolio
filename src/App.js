import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Comming from './pages/comming'
import NotFound from './pages/NotFound'
import fonts from './fontawesome/css/all.min.css'

// layouts
import RootLayout from './layouts/RootLayout'

//getichpages






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/resume' element={<Comming />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
