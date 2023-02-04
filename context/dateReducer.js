import moment from "moment";

export default function dateReducer(state, action) {
  switch (action.type) {
    case "next_date": {
      return {
        ...state,
        date: moment(state.date, "ddd MMM D")
          .add(1, "days")
          .format("ddd MMM D"),
        dateFormatted: moment(state.dateFormatted, "YYYYMMDD")
          .add(1, "days")
          .format("YYYYMMDD"),
      };
    }
    case "previous_date": {
      return {
        ...state,
        date: moment(state.date, "ddd MMM D")
          .subtract(1, "days")
          .format("ddd MMM D"),
        dateFormatted: moment(state.dateFormatted, "YYYYMMDD")
          .subtract(1, "days")
          .format("YYYYMMDD"),
      };
    }
  }
}
