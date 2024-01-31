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
} from "./actions-types";

const initialState = {
  drivers: [],
  driversBackUp: [],
  driverDetail: {},
  Teams: [],
  currentPage: 0,
};

const reducer = (state = initialState, action) => {
  const items_Page = 9;
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...action.payload].splice(0, items_Page),
        driversBackUp: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case GET_DRIVER_ID:
      return {
        ...state,
        driverDetail: action.payload,
      };
    case PAGINATION:
      const next_page = state.currentPage + 1; // Calcula la página siguiente y anterior
      const prev_page = state.currentPage - 1;
      const firstIndex = // Calcula el índice inicial según la acción (next o prev) y el número de ítems por página
        action.payload === "next"
          ? next_page * items_Page
          : prev_page * items_Page;

      if (action.payload === "next" && firstIndex >= state.driversBackUp.length)
        return state;
      if (action.payload === "prev" && prev_page < 0) return state;

      return {
        ...state,
        drivers: [...state.driversBackUp].splice(firstIndex, items_Page),
        currentPage: action.payload === "next" ? next_page : prev_page,
      };
    case SEARCH_DRIVER:
      return {
        ...state,
        drivers: [...action.payload],
      };
    case FILTER_TEAM:
      if (action.payload === "------")
        return {
          ...state,
          drivers: [...state.driversBackUp],
        };
      return {
        ...state,
        drivers: [...state.driversBackUp].filter((driver) =>
          driver.Teams?.includes(action.payload)
        ),
      };
    case FILTER_ORDER:
      if (action.payload === "------")
        return {
          ...state,
          drivers: [...state.driversBackUp].splice(0, items_Page),
        };
      if (action.payload === "asc") {
        return {
          ...state,
          drivers: [...state.driversBackUp].sort(
            (a, b) => new Date(a.birthdate) - new Date(b.birthdate)
          ),
        };
      }
      if (action.payload === "desc") {
        return {
          ...state,
          drivers: [...state.driversBackUp].sort(
            (a, b) => new Date(b.birthdate) - new Date(a.birthdate)
          ),
        };
      }
    case FILTER_ORIGIN:
      let filteredDrivers;

      if (action.payload === "all-drivers") {
        filteredDrivers = [...state.driversBackUp];
      } else if (action.payload === "api") {
        filteredDrivers = state.driversBackUp.filter(
          (driver) => !isNaN(driver.id)
        );
      } else if (action.payload === "created") {
        filteredDrivers = state.driversBackUp.filter((driver) =>
          isNaN(driver.id)
        );
      } else {
        // En caso de que el filtro no coincida con ninguna opción conocida, retorna el estado actual
        return state;
      }

      return {
        ...state,
        drivers: filteredDrivers,
      };

    // if (action.payload === "all-drivers")
    //   return {
    //     ...state,
    //     drivers: [...state.driversBackUp].splice(0, items_Page),
    //   };
    // if (action.payload === "api") {
    //   return {
    //     ...state,
    //     drivers: [...state.driversBackUp]
    //       .filter((driver) => !isNaN(driver.id))
    //       .splice(0, items_Page),
    //   };
    // }
    // if (action.payload === "created") {
    //   return {
    //     ...state,
    //     drivers: [...state.driversBackUp]
    //       .filter((driver) => isNaN(driver.id))
    //       .splice(0, items_Page),
    //   };
    // }
    case REFRESH:
      return {
        ...state,
        drivers: [...state.driversBackUp].splice(0, items_Page),
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

export default reducer;
