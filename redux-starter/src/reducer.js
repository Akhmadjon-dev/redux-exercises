import * as actions from "./actionTypes";
const initialValue = [];
let lastId = 0;

export default function reducer(state = initialValue, action) {
  switch (action.type) {
    case actions.bugAdded:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.bugRemoved:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.bugResolved:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
}
// export default function reducer(state = initialValue, action) {
//   if (action.type === "bugAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === "bugRemoved") {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   } else if (action.type === "bugResolved") {
//     return state.map((bug) =>
//       bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//     );
//   }
// }
