// Actions
const LOADSTART = "my-app/berries/LOADSTART";
const LOADEND = "my-app/berries/LOADEND";
const CHANGEID = "my-app/berries/CHANGEID";

const initialState = {
  id: 1,
  loading: false,
  berries: []
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADSTART:
      return startLoadingBerries();
    case LOADEND:
      debugger;
      return endLoadingBerries(action.berries);
    case CHANGEID:
      return changeBerryId(action.berryId);
    default:
      return state;
  }
}

// Action Creators
export function startLoadingBerries() {
  return {
    loading: true
  };
}

export function endLoadingBerries(berries) {
  return {
    loading: false,
    items: berries
  };
}

export function changeBerryId(id) {
  return {
    id: id
  };
}

// Thunks
export const getBerries = berryId => async dispatch => {
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
