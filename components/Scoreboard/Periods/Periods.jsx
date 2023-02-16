// component
import TeamLogo from "../../TeamLogo/TeamLogo";

export default function Periods({
  homeTeamId,
  homeTeamPeriods,
  homeTeamTri,
  awayTeamId,
  awayTeamPeriods,
  awayTeamTri,
}) {
  const homeScore = homeTeamPeriods.reduce((total, period) => {
    return total + period.score;
  }, 0);
  const awayScore = awayTeamPeriods.reduce((total, period) => {
    return total + period.score;
  }, 0);
  return (
    <div>
      {/* periods */}

      <table className="w-4/6 mx-auto mt-4 text-center">
        <thead className="border-b-2 border-black">
          <tr className="my-4">
            <th></th>
            {homeTeamPeriods.map((period, i) =>
              period.periodType === "OVERTIME" ? (
                <th key={i}>OT</th>
              ) : (
                <th key={i}>{i + 1}</th>
              )
            )}
            <th>T</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr>
            <td className="text-center">
              <TeamLogo
                teamId={homeTeamId}
                width={30}
                height={30}
                className="inline-block"
              />
            </td>
            {homeTeamPeriods.map((period, i) => (
              <td
                key={period.period}
                className={`${period.score > awayTeamPeriods[i].score
                    ? "font-extrabold"
                    : ""
                  }`}
              >
                {period.score > 0 ? period.score : "-"}
              </td>
            ))}
            {/* homeTeamTotal */}
            <td className={`${homeScore > awayScore ? "font-extrabold" : ""}`}>
              {homeScore}
            </td>
          </tr>

          <tr>
            <td>
              <TeamLogo teamId={awayTeamId} width={30} height={30} />
            </td>
            {awayTeamPeriods.map((period, i) => (
              <td
                key={period.period}
                className={`${period.score > homeTeamPeriods[i].score
                    ? "font-extrabold"
                    : ""
                  }`}
              >
                {period.score > 0 ? period.score : "-"}
              </td>
            ))}
            {/* awayTeamTotal */}
            <td className={`${awayScore > homeScore ? "font-extrabold" : ""}`}>
              {awayScore}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
