import React from "react";
import PropTypes from "prop-types";
import { copyrightText, footerNavItems } from "../../constants";

const Footer = (props) => (
  <footer class="footer d-flex justify-space row w-100 align-center">
    <span className="ml-1em">{copyrightText}</span>

    <ul className="hz-list">
      {footerNavItems.map((item, index) => <li key={index}>{item.title}</li>)}
    </ul>
  </footer>
);

Footer.propTypes = {};

export default Footer;
