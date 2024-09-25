import '../src/Styles/App.css';
import '../src/Styles/style.css';
import Footer from './components/Footer';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Projects from './Pages/Projects';


const AppLayout = () =>
  <>
    <Outlet /><Footer />
  </>

function App() {
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/faq',
          element: <Faq />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
