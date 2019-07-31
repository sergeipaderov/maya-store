import React from "react";

import "./styled.scss";
import Directory from "../../components/directory";

const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default HomePage;
