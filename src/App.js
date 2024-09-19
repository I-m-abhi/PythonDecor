import '../src/Styles/App.css';
import '../src/Styles/style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TopBar from './components/TopBar';
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
      <TopBar/>
      <Header/>
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default App;
