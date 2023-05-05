import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createContext, useState } from "react";

import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Contact from "./Components/Contact";
import PageContent from "./Components/PageContent";
import NotFoundPage from "./Components/NotFound";
import Login from "./Components/Login";
import About from "./Components/About";
import "./App.scss";

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

// Create an authentication context
const AuthContext = createContext();

function withLocation(Component) {
  return function WithLocation(props) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return <Component isHome={isHome} {...props} />;
  };
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication
  const handleAuthentication = (password) => {
    // Check if the password is correct
    if (password === "12345678") {
      setIsAuthenticated(true);
    }
  };

  const ConditionalHeader = withLocation(Header);

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthentication }}>
      <ApolloProvider client={client}>
        <Router>
          <Provider store={store}>
            <ConditionalHeader>
              <Nav />
            </ConditionalHeader>
            <PageContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageContent>
            <Footer />
          </Provider>
        </Router>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}

export default App;
