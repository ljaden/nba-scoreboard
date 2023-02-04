import Link from "next/link";
import Image from "next/image";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

// context
import { useGlobalDateContext } from "../../context/dateContext";

// components
import Live from "./Live/Live";
import Scheduled from "./Scheduled/Scheduled";

export default function Navbar() {
  const { date, dateFormatted, currentDate, currentDateFormatted, dispatch } =
    useGlobalDateContext();

  // console.log(dateFormatted, "dateF");
  // console.log(currentDateFormatted, "CdateF");
  // console.log(currentDateFormatted === dateFormatted, "boo");

  return (
    <div className="drop-shadow-lg">
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <AiOutlineCaretLeft
          onClick={() => dispatch({ type: "previous_date" })}
          className="cursor-pointer"
        />
        <div className="">
          {date}
          {dateFormatted === currentDateFormatted ? (
            <small className="text-slate-400">(Today)</small>
          ) : (
            ""
          )}
        </div>
        <AiOutlineCaretRight
          onClick={() => dispatch({ type: "next_date" })}
          className="cursor-pointer"
        />
      </div>
      {dateFormatted === currentDateFormatted ? (
        <Live />
      ) : (
        <Scheduled date={dateFormatted} />
      )}
    </div>
  );
}
