import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
// import ohhDennyServicesLlcBadge from "../images/OSD_site_badge.jpg";
// import styles from "../css/style.css";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-auto font-sans text-gray-900 ">
      <Header />

      {/*<main className="flex-1 h-auto px-0 py-4 mx-auto mx-1 md:px-0">*/}
        {children}
      {/*</main>*/}

      <footer className="bg-purple-700 border-t-2">
        <nav className="p-4 mx-auto text-sm md:p-8">
          <p className="text-center text-white">
            Made by{` `}
            <a
              className="font-bold no-underline"
              href="https://ohhdennyservices.us"
              target="_blank"
              rel="noopener noreferrer"
            >
             OhhDenny Services, LLC
            </a>
            {` `}with ❤
            <br/>
            {`Copyright `}&copy;{` 2020 O'Berry A. M. E. Zion Church. All Rights Reserved.`}
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
