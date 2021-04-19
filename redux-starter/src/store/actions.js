import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.bugAdded,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.bugResolved,
  payload: {
    id,
  },
});
export const bugRemoved = (id) => ({
  type: actions.bugRemoved,
  payload: {
    id,
  },
});
