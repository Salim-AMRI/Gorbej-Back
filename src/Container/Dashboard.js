import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        Tout les clients
        <div>
          <Link to="/enCours">
            <button>Commandes en cours</button>
          </Link>
        </div>
      </div>
    );
  }
}
