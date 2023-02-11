import Image from "next/image";
import { useState, useEffect } from "react";

export default function TeamLogo({ teamId, width, height }) {
  const [src, setSrc] = useState(
    `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`
  );

  useEffect(() => {
    setSrc(`https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`);
  }, [teamId]);

  return (
    <Image
      key={teamId}
      src={src}
      alt="logo"
      width={width}
      height={height}
      onError={() => setSrc("https://cdn.nba.com/logos/nba/fallback.svg")}
    ></Image>
  );
}
