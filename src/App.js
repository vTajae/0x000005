import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";
import store from "./utils/store";

import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
// import Sandbox from "./utils/test/Sandbox";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import PageContent from "./Components/PageContent";

// import {
//   featureSectionData,
//   whyChooseUsSectionData,
//   testimonialSectionData,
// } from "./Components/About/data";

import "./App.css";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <Header>
            <Nav />
          </Header>

          <PageContent>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route
                path="/about"
                element={
                  <About
                    featureSectionData={featureSectionData}
                    testimonialSectionData={testimonialSectionData}
                    whyChooseUsSectionData={whyChooseUsSectionData}
                  />
                }
              /> */}
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/sandbox" element={<Sandbox />} /> */}
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </PageContent>
          <Footer />
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
