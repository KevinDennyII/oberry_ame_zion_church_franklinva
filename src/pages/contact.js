import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="flex flex-col items-center md:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0053694159496!2d-76.96664638464816!3d36.72243227977302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0251e0534668f%3A0xbd90313cd51de4cb!2sO&#39;Berry%20A.M.E.%20Zion%20Church!5e0!3m2!1sen!2sus!4v1595306704305!5m2!1sen!2sus"
          width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
          tabIndex="0" className="sm:object-cover mx-auto"/>
        {/*<div className="sm:w-5/5 md:w-2/5">*/}
        {/*  We are located at...<br/>*/}
        {/*  31490 Oberry Church Rd,<br/>*/}
        {/*  Franlkin, VA 23851*/}
        {/*</div>*/}


      </section>
    </Layout>
  );
}

export default ContactPage;
