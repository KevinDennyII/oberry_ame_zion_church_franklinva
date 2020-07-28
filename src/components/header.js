import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import ameZionLogo from "../images/amezion-logo.png";
//import { ReactComponent as ameZionLogo } from "../images/amezion-logo-1.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-purple-700 border-b-2">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-4">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img
              alt="African Methodist Episcopal Zion Church Logo"
              width="30px"
              height="30px"
              // style={{
              //   borderLeft: "10px solid transparent",
              //   borderRight: "10px solid transparent",
              //   borderBottom: "25px solid transparent",
              // }}
              className="md:w-12 md:h-18 mr-2"
              src={ameZionLogo}
            />
            <span className="text-mobileHeader sm:text-xs md:text-xl lg:text-2xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <button
              className="text-mobileHeader md:text-base border-none bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
              key={link.title}
              // to={link.route}
            >
              <a href={link.route} className="border-none focus:no-underline">
                {link.title}
              </a>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
