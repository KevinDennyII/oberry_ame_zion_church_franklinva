import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="md:h-screen md:flex items-center mx-auto justify-center">
        <div className="md:flex-1 md:ml-18">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0053694159496!2d-76.96664638464816!3d36.72243227977302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0251e0534668f%3A0xbd90313cd51de4cb!2sO&#39;Berry%20A.M.E.%20Zion%20Church!5e0!3m2!1sen!2sus!4v1595306704305!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            height="400px"
            tabIndex="0"
            className="w-full p-4 mx-auto"
          />
        </div>
        <div className="p-8 md:flex-1 md:mr-18">
          <p className="font-bold text-md">
            Phone{" "}
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                color: "green",
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
            :{` `}
            <a href="tel:+17575690006">(757) 569-0006</a>
            <br />
            <br />
          </p>
          <p className="font-bold text-md">
            Worship: Sundays at 11:00 AM EST
            <br />
            Sunday School: Sundays at 10:00 AM EST
            <br />
            <br />
            <br />
            <p className="italic font-normal">
              *Due to COVID-19, our Worship and Sunday School services are
              provided through a telephone conference line.
              <br />
              <br />
              Telephone
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "green",
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                }}
              />
              : <a href="tel:+16054754700">605-475-4700</a>
              <br />
              Access Code: 257059#
            </p>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
