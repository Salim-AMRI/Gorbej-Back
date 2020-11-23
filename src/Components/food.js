import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductFromApi, selectProduct } from "../Action/menuActions";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatPrix from "./Prix";

class Food extends Component {
  componentDidMount() {
    this.props.getAllProduct();
  }

  render() {
    const { produits } = this.props;
    const toutProduct = produits.length ? (
      produits.map((el) => {
        return (
          <div className="carte" key={el._id}>
            <h2>{el.titre}</h2>

            <img className="menu" src={el.photo} alt={el.titre} />

            <p>{el.type}</p>
            <p>{el.etat}</p>
            <p>{formatPrix(el.prix)}</p>

            <button
              title="Click et savour"
              onClick={() =>
                this.props.selectProduct({
                  photo: el.photo,
                  type: el.type,
                  etat: el.etat,
                  titre: el.titre,
                  prix: el.prix,
                })
              }
            >
              Ajouter
            </button>
          </div>
        );
      })
    ) : (
      <p>Le dressings en vitrine n'est pas encore prêt</p>
    );
    return (
      <div>
        <h1>Dressings en Vitrine</h1>
        <Fade bottom cascade={true}>
          <div className="top">{toutProduct}</div>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produits: state.produits.produits,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllProduct: () => dispatch(getProductFromApi()),
  selectProduct: (data) => dispatch(selectProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Food);
