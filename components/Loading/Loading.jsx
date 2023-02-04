import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading({ isLoading }) {
  return (
    <>
      <PacmanLoader color="#000" loading={isLoading} size={50} />
    </>
  );
}
