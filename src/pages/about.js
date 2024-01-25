import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import oberryChurchCommittee from "../images/OBerry-church-committee-web.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section
        id="about"
        className="h-screen all:flex-col sm:flex md:flex items-center "
      >
        <div className="all:flex-none p-auto sm:flex-1 md:flex-1 p-4">
          <p className="text-xs text-black text-center">{`Team O'Berry`}</p>
          <figure className="object-contain">
            <img
              alt="O'Berry A. M. E. Zion Church Committee"
              className="rounded shadow-md"
              src={oberryChurchCommittee}
            />
            <figcaption className="text-tiny text-center">
              In front, from left: Otis Brown (deceased), Brenda Thomas, Candice
              Woodruff, Reginald Woodruff Sr. (deceased), Teressa Baxter; back,
              Willie and Ann Ellison, Earva Sumblin and Ruth Whitehead. Not
              pictured are Jean Buck-Denny, Phyllis Britt, Gladys Brown, Yvette
              Brown, Janice Stevens and John Whitehead
            </figcaption>
          </figure>
        </div>
        <div className="all:flex-none sm:flex-1 md:flex-1 text-black text-xs sm:text-xs md:text-sm lg:text-base p-4">
          <p className="bg-purple-500 bg-opacity-25 sm:text-aboutSmall md:text-sm rounded p-4 md:p-6">
            {/*<p>*/}
            O’Berry AME got its start in 1856 as a bush harbor, also known as a
            brush arbor or even hush harbor. That is, people conducted services
            outdoors, often secretly if they were slaves. Irvin Story is
            credited as the founder, and four years later in 1860, a
            brick-and-mortar structure was built for Christians to worship more
            comfortably and freely. Initially, the site was referred to as the
            O’Berry Colored Church. But after later aligning itself with a
            church in Harlem, New York, it became a member of the AME Zion
            family of churches
            <br />
            <br />
            Today, the congregation of approximately 67 people is led by the
            Rev. Dale Seaborne; the Rev. Carrie Seaborne is the first lady of
            the church, and the couple has been at O’Berry for 10 years.
            {/*</p>*/}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
