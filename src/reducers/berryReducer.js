const initialState = {
  id: 1
};

export default function proccessBerryId(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_BERRY_ID":
      return {
        id: action.berryId
      };
    default:
      return state;
  }
}
