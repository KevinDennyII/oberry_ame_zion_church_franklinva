import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import oberryAmeZionChurchPic from "../images/oberry_ame_zion_church.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="O'berry A. M. E. Zion Church of Franklin, Virginia"
          className="rounded-lg mx-auto w-full h-80 p-1 "
          src={oberryAmeZionChurchPic}
        />
        {/*<h2 className="inline-block text-teal-900 sm:text-sm md:text-2xl lg:text-2xl">*/}
        {/*  {`Welcome to O'Berry A. M. E. Zion Church of Franklin, Virginia!`}*/}
        {/*</h2>*/}
      </section>
    </Layout>
  );
}

export default IndexPage;
