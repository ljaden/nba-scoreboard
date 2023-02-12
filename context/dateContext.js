import { createContext, useContext, useReducer } from "react";
import dateReducer from "./dateReducer";

import moment from "moment";

const DateContext = createContext();

const initialState = {
  date: moment().utcOffset(-8).format("ddd MMM D"),
  dateFormatted: moment().utcOffset(-8).format("YYYYMMDD"),
  currentDate: moment().utcOffset(-8).format("ddd MMM D"),
  currentDateFormatted: moment().utcOffset(-8).format("YYYYMMDD"),
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
