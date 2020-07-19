import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import dogIllustration from "../images/dog-illustration.svg";
import oberryChurchCommittee from "../images/OBerry-church-committee-web.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
            We are located at...

            31490 Oberry Church Rd,
            Franlkin, VA 23851


            Worship: Sundays at 11:00 AM EST
            Bible Study: Sundays at 10:00 AM EST

          {/*<cite className="block mt-4 text-xs font-bold text-right uppercase">*/}
          {/*  – Thomas Nagel*/}
          {/*</cite>*/}
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="O'Berry A. M. E. Zion Church Committee" src={oberryChurchCommittee} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
