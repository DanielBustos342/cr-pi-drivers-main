import {
  GET_DRIVERS,
  GET_DRIVER_DETAIL,
  SEARCH_DRIVER,
  ORDER_ASC_DESC,
  ORDER_BY_DOB,
  FILTER_ALL_TEAMS,
  FILTER_TEAMS,
  FILTER_APIDB,
} from "./actions-types.js";

const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const initialState = {
  drivers: [],
  driversCopy: [],
  driverDetail: [],
  searchDriver: [],
  teams: [],
  driversApiDb: [],
  driversFiltered: [],
  filters: false,
  currentPage: 0,
};

const rootReducer = (state = initialState, action) => {
  let driverOrder;
  let driversDob;
  let driversCopy;
  let driverTeams;
  let driversApiDB;
  let apiDBCopy;
  let drivers;

  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...action.payload],
        driversCopy: action.payload,
      };
    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: action.payload,
      };
    case SEARCH_DRIVER: {
      const normalizeSearchValue = action.payload
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      driversCopy = [...state.driversCopy];
      return {
        ...state,
        drivers: [...driversCopy].filter((driver) =>
          removeAccents(driver.name)
            .toLowerCase()
            .includes(normalizeSearchValue)
        ),
      };
    }
    case ORDER_ASC_DESC:
      driverOrder = [...state.driversCopy];

      driverOrder.sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        drivers: driverOrder,
        driversCopy: driverOrder,
      };
    case ORDER_BY_DOB:
      driversDob = [...state.driversCopy];
      driversDob.sort((a, b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);

        if (action.payload === " desc") {
          return dateA - dateB;
        } else if (action.payload === "asc") {
          return dateB - dateA;
        }
        return 0;
      });
      return {
        ...state,
        drivers: driversDob,
        driversCopy: driversDob,
      };
    case FILTER_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case FILTER_TEAMS:
      drivers = [...state.driversCopy];
      driverTeams =
        action.payload === "all"
          ? drivers
          : drivers.filter(
              (driver) => driver.teams && driver.teams.includes(action.payload)
            );
      return {
        ...state,
        drivers: driverTeams,
        driversFiltered: driverTeams,
        filters: true,
      };
    case FILTER_APIDB:
      apiDBCopy = [...state.driversCopy];
      driversApiDB =
        action.payload === "database"
          ? apiDBCopy.filter((driver) => driver.createDB)
          : apiDBCopy.filter((driver) => !driver.createDB);
      return {
        ...state,
        drivers: action.payload === "all" ? apiDBCopy : driversApiDB,
        driversFiltered: driversApiDB,
      };
    default:
      return state;
  }
};

export default rootReducer;
