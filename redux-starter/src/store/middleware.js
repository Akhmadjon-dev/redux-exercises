const logger = (params) => (store) => (next) => (action) => {
  //   console.log(store, "STORE LOGGER");
  console.log(action, "ACTION LOGGER");
  console.log(next, "next LOGGER");
  console.log(store, "store LOGGER");
  console.log(params, "params LOGGER");

  //   next();
};

export default logger;

//  const add = (a)=>{
//     return function (b) {
//         return a + b
//     }
// }
// add(1)(2)

// const add = (a,b)=>{
//     return a+b
// }
// add(1,2)
