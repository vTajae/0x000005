import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import Home from "../Home";
import Registration from "../Registration";
import Sandbox from "../../utils/test/Sandbox";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Box } from "@mui/system";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "home":
        return <Home />;
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "registration":
        return <Registration />;
      case "sandbox":
        return <Sandbox />;
      default:
        return <Sandbox />;
    }
  };

  return (
    <section>
      {/* <h2>{capitalizeFirstLetter(currentPage.name)}</h2> */}
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
