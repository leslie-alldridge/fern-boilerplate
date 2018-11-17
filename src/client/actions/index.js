import { featuresRef, authRef, provider } from "./config/firebase";
import { FETCH_FEATURES } from "./types";
import "babel-polyfill";

export const fetchItems = () => async dispatch => {
  featuresRef.on("value", snapshot => {
    console.log(snapshot.val());

    dispatch({
      type: FETCH_FEATURES,
      payload: snapshot.val()
    });
  });
};

export const addToDo = (newIdea, uid) => async dispatch => {
  console.log(newIdea, uid);
  featuresRef.push().set(newIdea);
};
