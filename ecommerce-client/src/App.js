import { Fragment } from "react";
import Home from "./pages/home";
import './App.css';
import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Category from "./components/Category";



function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      {element}
      <Category />
    </>

  );
}

export default App;
