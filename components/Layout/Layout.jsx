import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <Navbar />
      <main className="w-full sm:w:[70%] p-4">{children}</main>
    </div>
  );
}
