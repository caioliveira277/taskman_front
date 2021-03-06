const INITIAL_STATE = { modal: "CLOSE" };

export default function ToggleModal(state = INITIAL_STATE, action) {
  let State;
  switch (action.type) {
    case "OPEN_MODAL":
      State = { ...state, target: action.target, modal: "OPEN" };
      break;
    case "CLOSE_MODAL":
      State = { ...state, target: action.target, modal: "CLOSE" };
      break;
    default:
      return state;
  }
  return State;
}
