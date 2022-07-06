import { useEffect, Fragment } from "react";
import Head from "next/head";
import copy from "@data/copy.json";

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
        <title>Netlify CMS DEMO</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main>
        <h1>{copy.headline}</h1>
        <h2>{copy.tagline}</h2>
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

// https://preeminent-trifle-d4a156.netlify.app/#invite_token=0GS5I5tdiaLS0YkLW3f3kw
// Not Found - Request ID: 01G7A9TPH89R1NZ3AT1G87W4G0
