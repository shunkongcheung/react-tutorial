import React, { memo } from "react";

import classNames from "./index.module.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return <div className={classNames.container}>Welcome HomePage.</div>;
};

export default memo(HomePage);
