import { useEffect, Fragment } from "react";
import Head from "next/head";
// import copy from "@data/copy.json";

const Home = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Netlify CMS && Next.js</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main>
        {/* <h1>{copy.headline}</h1> */}
        {/* <h2>{copy.tagline}</h2> */}
      </main>
    </Fragment>
  );
};

export default Home;

// <script
//   dangerouslySetInnerHTML={{
//     __html: `
//     if (window.netlifyIdentity) {
//       window.netlifyIdentity.on("init", user => {
//         if (!user) {
//           window.netlifyIdentity.on("login", () => {
//             document.location.href = "/admin/";
//           });
//         }
//       });
//     }
// `,
//   }}></script>
