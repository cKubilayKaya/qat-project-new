import React from "react";
import ContentLoader from "react-content-loader";

const TeamSkeleton = (props) => (
  <ContentLoader speed={2} width={300} height={300} viewBox="0 0 300 300" backgroundColor="#1f1f1f" foregroundColor="#2e2e2e" {...props}>
    <rect x="-76" y="-37" rx="0" ry="0" width="875" height="473" />
  </ContentLoader>
);

export default TeamSkeleton;
