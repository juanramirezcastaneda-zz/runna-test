export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        loading: true
      };
    case "FETCH_DATA_END":
      return {
        loading: false,
        items: action.payload
      };
    default:
      return state;
  }
};
