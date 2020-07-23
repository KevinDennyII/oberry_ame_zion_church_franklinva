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

      <section className="flex flex-col items-center ">
        <div className="mx-auto sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl">
          <div>Worship:{' '}
            Sundays at 11:00 AM EST<br/>
          </div>
          <div>Bible Study:{' '}
            Sundays at 10:00 AM EST<br/><br/>
          </div>
        </div>
        <figure className="w-3/3 md:w-3/3 xl:w-5/5">
          <img alt="O'Berry A. M. E. Zion Church Committee" className="rounded shadow-md" src={oberryChurchCommittee} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
