import Image from "next/image";

export default function Periods({
  homeTeamPeriods,
  homeTeamTri,
  awayTeamPeriods,
  awayTeamTri,
  period,
}) {
  return (
    <div>
      {/* periods */}

      <table className="w-5/6 mx-auto mt-4 text-center">
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
            <td>
              <Image
                src={`/logos/${homeTeamTri}.png`}
                alt="/"
                width={20}
                height={20}
                className="m-auto w-auto h-auto "
              ></Image>
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
              <Image
                src={`/logos/${awayTeamTri}.png`}
                alt="/"
                width={20}
                height={20}
                className="m-auto w-auto h-auto "
              ></Image>
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
