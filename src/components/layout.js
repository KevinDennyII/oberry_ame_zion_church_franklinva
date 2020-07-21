import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
// import ohhDennyServicesLlcBadge from "../images/OSD_site_badge.jpg";
// import styles from "../css/style.css";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-purple-700">
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
            &copy;{`Copyright 2020 O'Berry A. M. E. Zion Church. All Rights Reserved.`}
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
