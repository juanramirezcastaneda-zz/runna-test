import types from "./types";

// Actions
export function startLoadingBerries() {
  return {
    type: types.LOAD_START_BERRIES,
    loading: true
  };
}

export function endLoadingBerries(berries) {
  return {
    type: types.LOAD_END_BERRIES,
    loading: false,
    items: berries
  };
}

export function changeBerryId(id) {
  return {
    type: types.CHANGE_BERRY_ID,
    id
  };
}

export default {
  startLoadingBerries,
  endLoadingBerries,
  changeBerryId
};
