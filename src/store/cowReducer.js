import update from 'immutability-helper-x';
const BASE = 'COWS_';
const COWS_ADD_COW_CARD = BASE + 'ADD_COW_CARD';
const COWS_REMOVE_COW_CARD = BASE + 'REMOVE_COW_CARD';

export function addCowCardAction() {
  return {
    type: COWS_ADD_COW_CARD
  };
}

export function addCowCard(payload) {
  return dispatch => {
    let action = addCowCardAction();
    action.payload = payload;
    dispatch(action);
  };
}

export function removeCowCardAction() {
  return {
    type: COWS_REMOVE_COW_CARD
  };
}

export function removeCowCard(id) {
  return dispatch => {
    let action = removeCowCardAction();
    action.id = id;
    dispatch(action);
  };
}

const ACTION_HANDLERS = {
  [COWS_ADD_COW_CARD]: (state, action) => {
    let newValue = update.$set(state, action.payload.id, action.payload);
    return newValue;
  },
  [COWS_REMOVE_COW_CARD]: (state, action) => {
    delete state[action.id];
    return { ...state };
  }
};

export const initialState = {};

export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
