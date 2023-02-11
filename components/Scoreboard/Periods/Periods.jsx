import Image from "next/image";

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
        <tbody>
          <tr>
            <td className="text-center">
              <TeamLogo
                teamId={homeTeamId}
                width={30}
                height={30}
                className="inline-block"
              />
            </td>
            {homeTeamPeriods.map((period) => (
              <td key={period.period}>{period.score}</td>
            ))}
            {/* homeTeamTotal */}
            <td>
              {homeTeamPeriods.reduce((total, period) => {
                return total + period.score;
              }, 0)}
            </td>
          </tr>

          <tr>
            <td>
              <TeamLogo teamId={awayTeamId} width={30} height={30} />
            </td>
            {awayTeamPeriods.map((period) => (
              <td key={period.period}>{period.score}</td>
            ))}
            {/* awayTeamTotal */}
            <td>
              {awayTeamPeriods.reduce((total, period) => {
                return total + period.score;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
