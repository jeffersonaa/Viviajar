import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Promocoes from './pages/Promocoes';
import Destinos from './pages/Destinos';
import Contato from './pages/Contato';
import Admin from './pages/Admin';
import Edit from './pages/Edit';
import Add from './pages/Add';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/promocoes",
      element: <Promocoes />,
    },
    {
      path: "/destinos",
      element: <Destinos />,
    },
    {
      path: "/contato",
      element: <Contato />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin/edit/:id",
      element: <Edit />,
    },
    {
      path: "/admin/add",
      element: <Add />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
