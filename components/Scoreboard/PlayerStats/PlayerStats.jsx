import Image from "next/image";

export default function PlayerStats({ players }) {
  return (
    <>
      <div className="flex flex-col text-center mt-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr className="">
                    <th className=""></th>
                    <th className=""></th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      Player
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      FG%
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      FT%
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      3P
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      PTS
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      REB
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      AST
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      STL
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      BLK
                    </th>
                    <th className="text-sm font-medium text-gray-900 p-2">
                      TO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr
                      key={player.personId}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-200"
                    >
                      <td>
                        {player.oncourt === "1" && (
                          <small className="font-bold">
                            {player.jerseyNum}
                          </small>
                        )}
                      </td>
                      <td>
                        <Image
                          src={`https://cdn.nba.com/headshots/nba/latest/260x190/${player.personId}.png`}
                          alt="headshot"
                          width={35}
                          height={35}
                          className="hidden sm:block w-auto h-auto"
                        />
                      </td>
                      <td className="whitespace-nowrap text-sm font-medium text-gray-900">
                        <span>{player.name}</span>
                      </td>
                      <td>
                        <span>
                          {player.statistics.fieldGoalsPercentage.toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <span>
                          {player.statistics.freeThrowsPercentage.toFixed(2)}
                        </span>
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
    </>
  );
}
