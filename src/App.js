import '../src/Styles/App.css';
import '../src/Styles/style.css';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
