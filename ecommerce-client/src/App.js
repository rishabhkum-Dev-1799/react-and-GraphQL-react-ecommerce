import { Fragment } from "react";
import Home from "./pages/home";
import './App.css';
import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";



function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      {element}
    </>

  );
}

export default App;
