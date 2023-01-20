import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Page from "./Components/Page";
import Footer from "./Components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "home",
    },
    {
      name: "enroll",
    },
    { name: "contact" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
