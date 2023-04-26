import React from "react";
import { MyPageContent } from "./styles";

const PageContent = (props) => {
  return (
    <section>
      <MyPageContent>{props.children}</MyPageContent>
    </section>
  );
};

export default PageContent;
