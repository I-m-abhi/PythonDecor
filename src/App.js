import '../src/Styles/App.css';
import '../src/Styles/style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageNav from './components/PageNav';
import TopBar from './components/TopBar';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const AppLayout = () =>
  <>
    <TopBar /><Header /><Outlet /><Footer /><PageNav/>
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
