import React from "react";
import projectsData from "../data/design.json";
import ProjectDetail from "../components/common/ProjectDetail/index";

const DesignDetail = () => {
  return <ProjectDetail projectsData={projectsData} basePath="design" />;
};

export default DesignDetail;
