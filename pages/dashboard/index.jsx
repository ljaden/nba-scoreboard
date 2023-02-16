import Layout from "../../components/Layout/Layout";

const Dashboardpage = () => {
  return (
    <div>
      {/*Future Implementation- users settings, i.e player watchlist */}
      <span>Dashboardpage</span>
    </div>
  );
};

Dashboardpage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Dashboardpage;
