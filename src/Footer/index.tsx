import React, { memo } from "react";

import classNames from "./index.module.css";

interface FooterProps {
  count: number;
  handleCount: () => any;
}

const Footer: React.FC<FooterProps> = ({ count, handleCount }) => {
  return (
    <footer className={classNames.container}>
      <span>Pressed {count} times(s).</span>
      <button className={classNames.incrementBtn} onClick={handleCount}>
        Increment
      </button>
    </footer>
  );
};

export default memo(Footer);
