import { createContext, useContext, useReducer } from "react";
import dateReducer from "./dateReducer";

import moment from "moment";

const DateContext = createContext();

const initialState = {
  date: moment().format("ddd MMM D"),
  dateFormatted: moment().format("YYYYMMDD"),
  currentDate: moment().format("ddd MMM D"),
  currentDateFormatted: moment().format("YYYYMMDD"),
};

function DateProvider({ children }) {
  const [date, dispatch] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider value={{ ...date, dispatch }}>
      {children}
    </DateContext.Provider>
  );
}

export function useGlobalDateContext() {
  return useContext(DateContext);
}

export { DateContext, DateProvider };
