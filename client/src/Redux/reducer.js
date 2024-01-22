import {
  CLEAN_DETAIL,
  FILTER_ORDER,
  FILTER_ORIGIN,
  FILTER_TEAM,
  GET_DRIVERS,
  GET_DRIVER_ID,
  GET_TEAMS,
  PAGINATION,
  REFRESH,
  SEARCH_DRIVER,
} from "./actions-types.js";

const initialState = {
  drivers: [],
  driversBackUp: [],
  driverDetail: {},
  Teams: [],
  currentPage: 0,
};

const rootReducer = (state = initialState, action) => {
  const itemsPage = 9;
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...action.payload].splice(0, itemsPage),
        driversBackUp: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case GET_DRIVER_ID: {
      return {
        ...state,
        driverDetail: action.payload,
      };
    }
    case PAGINATION:
      const next_page = state.currentPage + 1;
      const prev_page = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? next_page * itemsPage
          : prev_page * itemsPage;

      if (action.payload === "next" && firstIndex >= state.driversBackUp.length)
        return state;
      if (action.payload === "prev" && prev_page < 0) return state;

      return {
        ...state,
        drivers: [...state.driversBackUp].splice(firstIndex, itemsPage),
        currentPage: action.payload === "next" ? next_page : prev_page,
      };
    case SEARCH_DRIVER:
      return {
        ...state,
        drivers: [...action.payload].splice(0, itemsPage),
      };
    case FILTER_TEAM:
      if (action.payload === "------")
        return {
          ...state,
          drivers: [...state.driversBackUp].splice(0, itemsPage),
        };
      return {
        ...state,
        drivers: [...state.driversBackUp]
          .filter((driver) => driver.Teams?.includes(action.payload))
          .splice(0, itemsPage),
      };
    case FILTER_ORDER:
      if (action.payload === "------")
        return {
          ...state,
          drivers: [...state.driversBackUp].splice(0, itemsPage),
        };
      if (action.payload === "asc") {
        return {
          ...state,
          drivers: [...state.driversBackUp]
            .sort((a, b) => new Date(a.birthdate) - new Date(b.birthdate))
            .splice(0, itemsPage),
        };
      }
      if (action.payload === "desc") {
        return {
          ...state,
          drivers: [...state.driversBackUp]
            .sort((a, b) => new Date(b.birthdate) - new Date(a.birthdate))
            .splice(0, itemsPage),
        };
      }
    case FILTER_ORIGIN:
      if (action.payload === "all-drivers")
        return {
          ...state,
          drivers: [...state.driversBackUp].splice(0, itemsPage),
        };
      if (action.payload === "api") {
        return {
          ...state,
          drivers: [...state.driversBackUp]
            .filter((driver) => !isNaN(driver.id))
            .splice(0, itemsPage),
        };
      }
      if (action.payload === "created") {
        return {
          ...state,
          drivers: [...state.driversBackUp]
            .filter((driver) => isNaN(driver.id))
            .splice(0, itemsPage),
        };
      }
    case REFRESH:
      return {
        ...state,
        drivers: [...state.driversBackUp].splice(0, itemsPage),
        currentPage: 0,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        driverDetail: {},
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
