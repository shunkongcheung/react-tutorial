import React, { memo } from "react";

import classNames from "./index.module.css";

interface HeaderProps {
  isLogin?: boolean;
  handleLogout: () => any;
}

const Header: React.FC<HeaderProps> = ({ isLogin = false, handleLogout }) => {
  return (
    <ul className={classNames.container}>
      <li className={classNames.listItem}>
        <a className={classNames.link} href="#">
          Home
        </a>
      </li>
      <li className={classNames.listItem}>
        <a className={classNames.link} href="#">
          News
        </a>
      </li>
      <li className={classNames.listItem}>
        <a className={classNames.link} href="#">
          Contact
        </a>
      </li>
      {!isLogin && (
        <li className={`${classNames.listItem} ${classNames.right}`}>
          <a className={classNames.link} href="#" onClick={handleLogout}>
            LOGOUT
          </a>
        </li>
      )}
    </ul>
  );
};

export default memo(Header);
