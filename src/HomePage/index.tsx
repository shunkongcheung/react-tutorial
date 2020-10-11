import React, { memo } from "react";

import classNames from "./index.module.css";

import useKeyOneListener from "./useKeyOneListener";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  useKeyOneListener();
  return <div className={classNames.container}>Welcome HomePage.</div>;
};

export default memo(HomePage);
