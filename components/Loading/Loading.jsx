// import PacmanLoader from "react-spinners/PacmanLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  // return <Skeleton height={80} width={175} className="border border-black" />;
  return <Skeleton baseColor="#a0ff0b" className="border border-black" />;
}
