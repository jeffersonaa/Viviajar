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
// Destinos
import DestinosList from "./pages/DestinosAdmin/List"
import DestinosEdit from './pages/DestinosAdmin/Edit';
import DestinosAdd from './pages/DestinosAdmin/Add';

// Clientes
import ClientesList from "./pages/ClientesAdmin/List"
import ClientesEdit from './pages/ClientesAdmin/Edit';
import ClientesAdd from './pages/ClientesAdmin/Add';

// Passagens
import PassagensList from "./pages/PassagensAdmin/List"
import PassagensEdit from './pages/PassagensAdmin/Edit';
import PassagensAdd from './pages/PassagensAdmin/Add';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <ClientesList />,
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
      path: "/admin/destinos",
      element: <DestinosList />,
    },
    {
      path: "/admin/destinos/edit/:id",
      element: <DestinosEdit />,
    },
    {
      path: "/admin/destinos/add",
      element: <DestinosAdd />,
    },
    {
      path: "/admin/clientes",
      element: <ClientesList />,
    },
    {
      path: "/admin/clientes/edit/:id",
      element: <ClientesEdit />,
    },
    {
      path: "/admin/clientes/add",
      element: <ClientesAdd />,
    },
    {
      path: "/admin/passagens",
      element: <PassagensList />,
    },
    {
      path: "/admin/passagens/edit/:id",
      element: <PassagensEdit />,
    },
    {
      path: "/admin/passagens/add",
      element: <PassagensAdd />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
