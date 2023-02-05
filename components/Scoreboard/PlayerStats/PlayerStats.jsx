import Image from "next/image";

export default function PlayerStats({
  players,
  displayHome,
  setDisplayHome,
  homeTeamName,
  awayTeamName,
}) {
  return (
    <>
      <div className="flex justify-center mt-2">
        <button
          className={`${displayHome ? `${homeTeamName}-color text-white` : "text-gray-800"
            } font-bold py-2 px-8 rounded hover:scale-110 transition duration-200 ease-in-out`}
          onClick={() => setDisplayHome(true)}
        >
          {homeTeamName}
        </button>
        <button
          className={`${!displayHome ? `${awayTeamName}-color text-white` : "text-gray-800"
            }  font-bold py-2 px-8 rounded hover:scale-110 transition duration-200 ease-in-out`}
          onClick={() => setDisplayHome(false)}
        >
          {awayTeamName}
        </button>
      </div>
      <div className="flex flex-col text-center">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr className="">
                    <th className=""></th>
                    <th className="font-medium text-gray-900 p-2">Players</th>
                    <th className="font-medium text-gray-900 p-2">Mins</th>
                    <th className=" font-medium text-gray-900 p-2">FG%</th>
                    <th className=" font-medium text-gray-900 p-2">FT%</th>
                    <th className=" font-medium text-gray-900 p-2">3P</th>
                    <th className=" font-medium text-gray-900 p-2">PTS</th>
                    <th className=" font-medium text-gray-900 p-2">REB</th>
                    <th className="font-medium text-gray-900 p-2">AST</th>
                    <th className=" font-medium text-gray-900 p-2">STL</th>
                    <th className=" font-medium text-gray-900 p-2">BLK</th>
                    <th className=" font-medium text-gray-900 p-2">TO</th>
                  </tr>
                </thead>
                <tbody>
                  {players
                    .filter((player) => player.status === "ACTIVE")
                    .map((player) => (
                      <tr
                        key={player.personId}
                        className="text-md bg-white border-b transition duration-300 ease-in-out hover:bg-gray-200"
                      >
                        <td>
                          {player.oncourt === "1" && (
                            <small className=" font-bold">
                              {player.jerseyNum}
                            </small>
                          )}
                        </td>
                        <td className="whitespace-nowrap font-medium py-2">
                          <span>{player.name}</span>
                        </td>
                        <td className="">
                          <span>
                            {parseInt(
                              player.statistics.minutesCalculated
                                .replace("PT", "")
                                .replace("M", "")
                            )}
                          </span>
                        </td>
                        <td>
                          <span>
                            {`${player.statistics.fieldGoalsMade}/${player.statistics.fieldGoalsAttempted}`}
                          </span>
                          {/* <span> */}
                          {/*   {( */}
                          {/*     player.statistics.fieldGoalsPercentage * 100 */}
                          {/*   ).toFixed(2)} */}
                          {/* </span> */}
                        </td>
                        <td>
                          <span>
                            {`${player.statistics.freeThrowsMade}/${player.statistics.freeThrowsAttempted}`}
                          </span>
                          {/* <span> */}
                          {/*   {player.statistics.freeThrowsPercentage.toFixed(2)} */}
                          {/* </span> */}
                        </td>
                        <td>
                          <span>{player.statistics.threePointersMade}</span>
                        </td>
                        <td>
                          <span>{player.statistics.points}</span>
                        </td>
                        <td>
                          <span>{player.statistics.reboundsTotal}</span>
                        </td>
                        <td>
                          <span>{player.statistics.assists}</span>
                        </td>
                        <td>
                          <span>{player.statistics.steals}</span>
                        </td>
                        <td>
                          <span>{player.statistics.blocks}</span>
                        </td>
                        <td>
                          <span>{player.statistics.turnovers}</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <small>Inactive: </small>
        {players
          .filter((player) => player.status === "INACTIVE")
          .map((player) => player.nameI)
          .map((name) => (
            <small key={name} className="text-gray-400">
              {name},{" "}
            </small>
          ))}
      </div>
    </>
  );
}
