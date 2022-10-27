import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Loading from "./components/Loading";
import Notes from "./pages/Notes";
import AddNotes from "./pages/AddNotes";

const App = () => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const { isLoading, error, user, isAuthenticated } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  const genericToken = async () => {
    try {
      return await getAccessTokenSilently();
    } catch (error) {}
  };
  const scopedToken = async (scope) => {
    try {
      return await getAccessTokenSilently({
        scope: scope,
      });
    } catch (error) {
      return await getAccessTokenWithPopup({
        scope: scope,
      });
    }
  };

  // TODO: better loading component
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <Router>
      <div>
        <NavBar />
        {isAuthenticated ? (
          <Routes>
            <Route
              path="/"
              element={<Notes tokenGenerator={genericToken} user={user} />}
            ></Route>
            <Route
              path="/addNote"
              element={<AddNotes tokenGenerator={genericToken} user={user} />}
            ></Route>
          </Routes>
        ) : (
          <div>Not authenticated </div>
        )}
      </div>
    </Router>
  );
};
export default App;
