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
        <div className="w-2/5 md:mr-8 text-2xl">
            {/*We are located at...*/}

            {/*31490 Oberry Church Rd,*/}
            {/*Franlkin, VA 23851*/}

          <div>Worship:<br/>
            Sundays at 11:00 AM EST<br/><br/>
          </div>
          <div>Bible Study:<br/>
            Sundays at 10:00 AM EST<br/><br/>
          </div>

          {/*<cite className="block mt-4 text-xs font-bold text-right uppercase">*/}
          {/*  – Thomas Nagel*/}
          {/*</cite>*/}
        </div>

        <figure className="w-3/3 md:w-3/3">
          <img alt="O'Berry A. M. E. Zion Church Committee" className="rounded shadow-md" src={oberryChurchCommittee} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
