import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Carte from "./Container/Carte";
import Commande from "./Container/Commande";
import Connexion from "./Container/Connexion";
import Deconnexion from "./Container/Decnx";
import Auto from "./Container/Auten";
import Accueil from "./Container/Accueil";
import Dashboard from "./Container/Dashboard";
import Orders from "./Container/Orders";
import Client from "./Container/Client";

//json-server --watch db.json

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/client" component={Client} />

        <Route exact path="/" component={Accueil} />
        <Route exact path="/cnx" component={Connexion} />
        <Route exact path="/home" component={Carte} />
        <Route exact path="/panier" component={Commande} />
        <Route exact path="/signup" component={Deconnexion} />
        <Route path="/auto">
          <Auto />
        </Route>
        <Route path="/cxn">
          <Connexion />
        </Route>
        <Route path="/carte">
          <Carte />
        </Route>
        <Route path="/enCours">
          <Orders />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
