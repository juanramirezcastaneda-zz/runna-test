export const fetchServerAction = berryId => async dispatch => {
  dispatch({
    type: "FETCH_DATA_START"
  });
  debugger;
  const getUrl = `https://pokeapi.co/api/v2/berry-firmness/${berryId}/`;
  await fetch(getUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonPayload) {
      dispatch({
        type: "FETCH_DATA_END",
        payload: jsonPayload.berries
      });
    })
    .catch(function(response) {
      dispatch({
        type: "FETCH_DATA_END",
        payload: []
      });
    });
};
