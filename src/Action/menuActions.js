import Axios from "axios";
import { GET_ALL_PRODUCT, SELECT_PRODUCT, ADD_PRODUCT } from "./types";

/* afficher la nourriture */

export const getAllProduct = (payload) => ({
  type: GET_ALL_PRODUCT,
  payload: payload,
});

export function getProductFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/produits").then((res) =>
      dispatch(getAllProduct(res.data))
    );
}

/* ajouter au panier */

export const addToPanier = (payload) => ({
  type: SELECT_PRODUCT,
  payload,
});

export function selectProduct(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/panier`, el)
      .then((res) => dispatch(addToPanier(el)))
      .catch((err) => console.log(err));
}

/* add  product */

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export function postProduct(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/produits`, {
      id: el.id,
      titre: el.titre,
      type: el.type,
      etat: el.etat,
      photo: el.photo,
      description: el.description,
      prix: el.prix,
    })
      .then((res) => dispatch(addProduct(el)))
      .catch((err) => console.log(err));
}
