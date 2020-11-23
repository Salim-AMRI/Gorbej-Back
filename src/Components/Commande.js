import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deletePanierFromApi,
  getPanierFromApi,
  updatePanierFromAPI,
} from "../Action/orderActions";
import formatPrix from "./Prix";
import Zoom from "react-reveal/Zoom";

class Order extends Component {
  componentDidMount() {
    this.props.getAllPanier();
  }

  render() {
    const prixPanier = (
      <span>
        {this.props.panier.reduce((a, el) => a + Number.parseFloat(el.prix), 0)}
      </span>
    );
    const foodPanier = this.props.panier.length ? (
      this.props.panier.map((el) => {
        return (
          <Zoom>
            <div className="carte" key={el.id}>
              <span
                title="Opps! Supprimer!"
                style={{ fontSize: "x-large", cursor: "pointer" }}
                role="img"
                aria-label="Opps! Supprimer!"
                onClick={() => {
                  this.props.delete(el.id);
                }}
              >
                🗑️
              </span>
              <h2>{el.titre}</h2>
              <img className="menu" src={el.photo} alt="select food" />
              <p>Prix : {formatPrix(el.prix)} </p>
            </div>
          </Zoom>
        );
      })
    ) : (
      <h2>
        Votre panier est vide
        <br />
        Veuillez y mettre des articles...
      </h2>
    );
    return (
      <div>
        <h1>Vous allez Commander ...</h1>
        <div className="top">{foodPanier}</div>
        <h2>
          Prix Total de la Commande : <span>{prixPanier}</span> TND
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPanier: () => dispatch(getPanierFromApi()),
  delete: (id) => dispatch(deletePanierFromApi(id)),
  updatePanier: (el) => dispatch(updatePanierFromAPI(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
