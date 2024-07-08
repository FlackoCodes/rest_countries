import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import AboutCountry from './Pages/AboutCountry';
import NoteFound from './Pages/NoteFound';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home />}/>
        <Route path='country-details/:id' element={<AboutCountry />}/>
         {/* ':id' acting as a placeholder for actual
          values passed as URL params
         */}
        <Route path="*" element={<NoteFound />} />
      </Route>
    )
  )

  return (
         <RouterProvider router={router} />
  )
}

export default App
