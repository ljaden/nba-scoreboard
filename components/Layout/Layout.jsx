import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <main className="w-full md:w-[80%] p-4">{children}</main>
    </div>
  );
}
