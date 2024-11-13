// import '../src/Styles/App.css';
// import '../src/Styles/style.css';
import '../src/Styles/updateStyle.css';
import Footer from './components/Footer';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import TopBar from './components/TopBar';
import Header from './components/Header';


const AppLayout = () =>
  <>
    <TopBar />
    <Header />
    <Outlet />
    <Footer />
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
        {
          path: '/blogs',
          element: <Blog />,
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
