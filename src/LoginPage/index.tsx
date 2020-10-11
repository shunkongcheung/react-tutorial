import React, { memo, useState, FormEvent, ChangeEvent } from "react";
import classNames from "./index.module.css";

interface LoginPageProps {
  handleLoginSuccess: () => any;
}

const LoginPage: React.FC<LoginPageProps> = ({ handleLoginSuccess }) => {
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!errMsg) handleLoginSuccess();
  };

  const validateUsername = (evt: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmail = re.test(String(value).toLowerCase());
    setErrMsg(isEmail ? "" : "Not a valid email");
  };

  return (
    <form className={classNames.container} onSubmit={onSubmit}>
      <div className={classNames.formGroup}>
        <label htmlFor="fname">Username</label>
        <input
          type="text"
          id="fname"
          name="username"
          placeholder="Enter an email"
          onChange={validateUsername}
        />
        {!!errMsg && (
          <span className={classNames.errMsg}>&#9888; {errMsg}</span>
        )}
      </div>
      <div className={classNames.formGroup}>
        <label htmlFor="lname">Password</label>
        <input
          type="text"
          id="lname"
          name="password"
          placeholder="Can be anything"
        />
      </div>
      <div>
        <input type="submit" value="Submit" disabled={!!errMsg} />
      </div>
    </form>
  );
};

export default memo(LoginPage);
