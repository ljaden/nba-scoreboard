import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

// context
import { useGlobalDateContext } from "../../context/dateContext";

// components
// import Live from "./Live/Live";
import Schedule from "./Schedule/Schedule";

export default function Navbar() {
    const { date, dateFormatted, currentDate, currentDateFormatted, dispatch } =
        useGlobalDateContext();

    return (
        <div className="min-w-[30%] sm:min-w-max sm:h-screen bg-[#ecf0f3] p-4 ease-in duration-500  sm:overflow-y-scroll ">
            <div className="">
                <div className="flex justify-between items-center border-b border-gray-300 py-4">
                    <AiOutlineCaretLeft
                        onClick={() => dispatch({ type: "previous_date" })}
                        className="cursor-pointer"
                    />
                    <div className="">
                        {date}{" "}
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

                <Schedule date={dateFormatted} />
            </div>
        </div>
    );
}
