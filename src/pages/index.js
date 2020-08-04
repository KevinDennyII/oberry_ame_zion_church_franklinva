import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section id="home" className="h-screen">
        <div className="text-shadow pt-32 sm:pt-56 md:pt-48 lg:pt-48 sm:text-2xl md:text-3xl lg:text-4xl text-center roboto font-black text-white">
          {`Welcome To`}
          <br />
          {`O'Berry A. M. E. Zion Church!`}
        </div>
        <div className="bg-opacity-25 bg-gray-400 font-extrabold text-xs md:text-base text-center text-indigo-100 shadow-xl">{`A little church with a big ❤`}</div>
      </section>
    </Layout>
  );
}

export default IndexPage;
