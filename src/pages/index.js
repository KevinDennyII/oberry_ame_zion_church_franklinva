import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import oberryAmeZionChurchPic from "../images/oberry_ame_zion_church.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section id="home" className="h-screen">
        <div className="text-shadow pt-56 sm:pt-56 md:pt-48 lg:pt-48 sm:text-2xl md:text-3xl lg:text-4xl text-center roboto font-black text-white">
          {`Welcome`}
          <br />
          {`To`}
          <br />
          {`O'Berry A. M. E. Zion Church!`}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
