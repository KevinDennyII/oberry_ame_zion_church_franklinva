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

      <section className="flex items-center ">
        <div className="flex-1 mx-auto text-center sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-black">
          <div className="textShadow font-medium ">
            We are little country church with a big passion for Christ!
            <br />
            Jesus is KING!
            <br />
            <br />
          </div>
          <div>
            Worship: Sundays at 11:00 AM EST
            <br />
          </div>
          <div>
            Bible Study: Sundays at 10:00 AM EST
            <br />
            <br />
          </div>
        </div>
        <div className="flex-1 p-4">
          <figure>
            <img
              alt="O'Berry A. M. E. Zion Church Committee"
              className="rounded shadow-md"
              src={oberryChurchCommittee}
            />
            <figcaption className="text-xs text-center">
              in front, from left: Otis Brown, Brenda Thomas, Candice Woodruff,
              Reginald Woodruff Sr. Teressa Baxter; back, Willie and Ann
              Ellison, Earva Sumblin and Ruth Whitehead. Not pictured are Jean
              Buck-Denny, Phyllis Britt, Gladys Brown, Yvette Brown, Janice
              Stevens and John Whitehead
            </figcaption>
          </figure>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
