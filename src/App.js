import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
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
import PasswordProtectedPage from "./Components/PasswordPage";
import Login from "./Components/Login";

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

function Authenticated({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/password-protected-page" replace />;
  }

  return <Outlet />;
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthentication }}>
      <ApolloProvider client={client}>
        <Router>
          <Provider store={store}>
            <Header>
              <Nav />
            </Header>
            <PageContent>
              <Routes>
                <Route
                  path="/"
                  element={<Authenticated isAuthenticated={isAuthenticated} />}
                >
                  <Route index element={<Home />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route
                  path="/password-protected-page"
                  element={<PasswordProtectedPage onAuthentication={handleAuthentication} />}
                />
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
