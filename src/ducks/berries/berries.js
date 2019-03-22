// // Thunks
// export const getBerries = berryId => async dispatch => {
//   const getUrl = `https://pokeapi.co/api/v2/berry-firmness/${berryId}/`;
//   await fetch(getUrl)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(jsonPayload) {
//       dispatch(endLoadingBerries(jsonPayload.berries));
//     })
//     .catch(function(response) {
//       dispatch(endLoadingBerries([]));
//     });
// };
