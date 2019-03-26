import actions from "./actions";

const startLoadingBerries = actions.startLoadingBerries;
const endLoadingBerries = actions.endLoadingBerries;
const changeBerryId = actions.changeBerryId;

const loadBerries = berryId => async dispatch => {
  dispatch(startLoadingBerries());
  const getUrl = `https://pokeapi.co/api/v2/berry-firmness/${berryId}/`;
  await fetch(getUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonPayload) {
      dispatch(endLoadingBerries(jsonPayload.berries));
    })
    .catch(function(response) {
      dispatch(endLoadingBerries([]));
    });
};

export default {
  changeBerryId,
  loadBerries
};
