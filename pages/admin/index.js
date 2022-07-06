import dynamic from "next/dynamic";

const CMS_CONFIG = {};

const Loading = () => (
  <div>
    <p>Loading...</p>
  </div>
);

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((CMS) => {
      CMS.init({ CMS_CONFIG });
      CMS.registerWidget("kitchenSink", control, [preview], [schema]);
    }),
  { ssr: false, loading: Loading }
);

const Admin = () => {
  return <CMS />;
};

export default Admin;
