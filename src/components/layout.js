import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col font-sans text-gray-900 ">
      <Header />

      {/*<main className="flex-1 h-auto px-0 py-4 mx-auto mx-1 md:px-0">*/}
      {children}
      {/*</main>*/}

      <footer className="bg-purple-700 border-t-2">
        <nav className="p-4 mx-auto text-mobileHeader md:p-8">
          <p className="text-center text-white">
            Made by{` `}
            <a
              className="font-bold no-underline"
              href="https://www.ohhdennyservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              OhhDenny Services, LLC
            </a>
            {` `}with ❤
            <br />
            {`Copyright `}&copy;
            {` 2021 O'Berry A. M. E. Zion Church. All Rights Reserved.`}
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
