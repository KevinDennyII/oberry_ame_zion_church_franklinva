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
        {/*<img*/}
        {/*  alt="O'berry A. M. E. Zion Church of Franklin, Virginia"*/}
        {/*  className="rounded-lg mx-auto w-full h-80 p-1 "*/}
        {/*  src={oberryAmeZionChurchPic}*/}
        {/*/>*/}
        <div className="pt-16 sm:pt-56 md:pt-48 lg:pt-48 sm:text-2xl md:text-3xl lg:text-4xl text-center roboto font-black text-white">
            {/*<svg id="curved" viewBox="0 0 500 500">*/}
            {/*    <path className="curvedtext" id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />*/}
            {/*    <text width="500">*/}
            {/*        <textPath xlinkHref="#curve">*/}
                        {`Welcome`}<br/>{`To`}<br/>{`O'Berry A. M. E. Zion Church!`}
            {/*        </textPath>*/}
            {/*    </text>*/}
            {/*</svg>*/}
        </div>

      </section>
    </Layout>
  );
}

export default IndexPage;
