export const TOGGLE = "ui/toggle";

const initialState = {
  toggle: false // data
};
// UI Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state, // toggle:false
        toggle: !state.toggle // if true set to false else vice-versa
      };
    }

    default: {
      return { ...state };
    }
  }
};
// ACTION
export const toggleSwitch = () => dispatch => {
  dispatch({ type: TOGGLE });
};
