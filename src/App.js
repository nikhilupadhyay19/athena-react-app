import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@icon/icofont/icofont.css";

import "./App.css";

import { Header } from "./containers/Header/Header";
import { Main } from "./containers/Main/Main";
import { Footer } from "./containers/Footer/Footer";

function App() {
  return (
    <div className="Athena__app" id="Athena_app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
