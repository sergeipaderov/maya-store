import React from "react";

import "./styled.scss";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

const SigninPage = () => (
  <div className="signin-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninPage;
