import React from "react";

import classNames from "./index.module.css";

interface FooterProps {
  count: number;
}

const Footer: React.FC<FooterProps> = ({ count }) => {
  return (
    <footer className={classNames.container}>
      <span>Pressed logout button {count} times(s).</span>
    </footer>
  );
};

export default Footer;
