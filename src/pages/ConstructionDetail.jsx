import React from "react";
import projectsData from "../data/projects.json";
import ProjectDetail from "../components/common/ProjectDetail/index";

const ConstructionDetail = () => {
  return <ProjectDetail projectsData={projectsData} basePath="construction" />;
};

export default ConstructionDetail;
