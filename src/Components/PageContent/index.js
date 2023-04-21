import React from "react";
import { MyPageContent, pageWrapper } from "./styles";

const PageContent = (props) => {
  return (
      <MyPageContent>{props.children}</MyPageContent>
  );
};

export default PageContent;
