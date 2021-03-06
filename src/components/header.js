import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import ameZionLogo from "../images/amezion-logo-2.png";

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
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto">
        <Link to="/">
          <h1 className="flex m-2 md:m-4 items-center text-white no-underline">
            <img
              alt="African Methodist Episcopal Zion Church Logo"
              width="60px"
              height="60px"
              className="md:w-18 md:h-18 mr-2"
              src={ameZionLogo}
            />
            <span className="text-mobileHeader mx-auto sm:text-xs md:text-xl lg:text-2xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-2 h-2 md:w-3 md:h-3 fill-current"
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
              className="text-mobileHeader md:text-base border-none bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-3 md:px-4 rounded"
              key={link.title}
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
