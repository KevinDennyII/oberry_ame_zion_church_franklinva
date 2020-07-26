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

      <section className="all:flex-col flex items-center ">
        <div className="all:flex-none flex-1 text-black all:text-xxs text-xs sm:text-xs md:text-sm lg:text-base p-4">
          <p>
            O’Berry AME got its start in 1856 as a bush harbor, also known as a
            brush arbor or even hush harbor. That is, people conducted services
            outdoors, often secretly if they were slaves. Irvin Story is
            credited as the founder, she said, and four years later a
            brick-and-mortar structure was built for Christians to worship more
            comfortably and freely. Initially, the site was referred to as the
            O’Berry Colored Church. But after later aligning itself with a
            church in Harlem, New York, it became a member of the AME Zion
            family of churches
            <br />
            <br />
          </p>
          <p>
            Today, the congregation of approximately 67 people is led by the
            Rev. Dale Seaborne; the Rev. Carrie Seaborne is the first lady of
            the church, and the couple has been at O’Berry for 10 years.
          </p>
        </div>
        <div className="all:flex-none flex-1 p-4">
          <figure className="object-contain">
            <img
              alt="O'Berry A. M. E. Zion Church Committee"
              className="rounded shadow-md"
              src={oberryChurchCommittee}
            />
            <figcaption className="text-tiny text-center">
              In front, from left: Otis Brown, Brenda Thomas, Candice Woodruff,
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
