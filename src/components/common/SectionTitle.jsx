import React from "react";
import "../../styles/common/_section-title.scss";

const SectionTitle = ({ children, className, ...props }) => {
  const titleClasses = `section-title ${className || ""}`;

  return (
    <h2 className={titleClasses} {...props}>
      {children}
    </h2>
  );
};

export default SectionTitle;
