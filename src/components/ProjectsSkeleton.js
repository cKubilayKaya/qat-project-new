import React from "react";
import ContentLoader from "react-content-loader";

const ProjectsSkeleton = (props) => (
  <ContentLoader speed={3} width="100%" height={300} viewBox="0 0 414 300" backgroundColor="#1f1f1f" foregroundColor="#2e2e2e" {...props}>
    <rect x="2" y="13" rx="0" ry="0" width="100%" height="300" />
  </ContentLoader>
);

ProjectsSkeleton.metadata = {
  name: "Hassan Tijani.A",
  github: "surepeps",
  description: "Image Grid with Pagination",
  filename: "ProjectsSkeleton",
};

export default ProjectsSkeleton;
