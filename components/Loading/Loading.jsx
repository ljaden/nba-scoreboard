import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading({ isLoading }) {
  return (
    <div className="mx-auto my-auto">
      <PacmanLoader color="#000" loading={isLoading} size={50} />
    </div>
  );
}
