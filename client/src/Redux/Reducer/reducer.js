//! 1-importar las actions-types
// import {
//   GET_DRIVERS,
//   GET_ID,
//   GET_TEAMS,
//   POST_DRIVER,
//   RESET_DETAIL,
//   SORT_BY_SURNAME,
//   FILTER_BY_DATA,
//   FILTER_BY_TEAM,
//   SEARCH_NAME,
//   SET_PAGE,
//   RESET_AUX,
// } from "../Actions/actions-types.js";

//! 2- definir el initialState
// let initialState = {
//   allDrivers: [],
//   filteredByData: [],
//   copy: [],
//   allTeams: [],
//   detail: [],
//   page: 1,
//   filteredByTeam: [],
//   aux: [],
// };

//! 3- definir la funcion rootReducer
// const rootReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_DRIVERS:
//       return {
//         ...state,
//         allDrivers: payload,
//       };
//     case SET_PAGE:
//       return {
//         ...state,
//         page: payload,
//       };
//     case RESET_AUX:
//       return {
//         ...state,
//         aux: payload,
//       };
//     case GET_TEAMS:
//       return {
//         ...state,
//         allTeams: payload,
//       };
//   }
// };

// function rootReducer() {
//state = initialState, actions (de parametros)
//   const ITEM_PER_PAGE = 5;
//   switch (actions.type) {
//     case GET_POWERS:
//       return {
//         ...state,
//         allPowers: actions.payload,
//       };
//     case GET_SEARCH:
//       return {
//         ...state,
//         allHeroes: [...state.allHeroesBackUp].filter(
//           (h) => h.nombre === actions.payload
//         ),
//       };
//     case GET_HEROES:
//       return {
//         ...state,
//         allHeroes: [...actions.payload].splice(0, ITEM_PER_PAGE),
//       };
//     case FILTER:
//       switch (
//         actions.payload //? AZ | ZA | poder
//       ) {
//         case "AZ":
//           //? realizar el .sort()
//           //? guardar info en el estado
//           return {
//             ...state,
//             allHeroes: [...asc].splice(0, ITEM_PER_PAGE),
//             allHeroesBackUp: asc,
//             currentPage: 0,
//           };
//         case "ZA":
//           let dte = [];
//           //? realizar el .sort();
//           //? cuardar info en el estado
//           return {};
//         default:
//           return;
//       }
//     case PAGINATE:
//       //? definir first index
//       //? casos de corte
//       //? guardar en el estado
//       return;
//     default:
//       return state;
//   }
// }

// export default rootReducer;
