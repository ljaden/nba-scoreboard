import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <div className="w-full md:w-[80%] p-4">
        <main className="">{children}</main>
      </div>
    </div>
  );
}
