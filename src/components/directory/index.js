import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/dirSelectors";

import MenuItem from "../menuItem";
import "./styled.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections
  });

export default connect(mapStateToProps)(Directory);
