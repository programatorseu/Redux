import SearchWithin from "./SearchWithin";
import { StrictMode } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchWithin />} />
        </Routes>
      </Provider>
    </StrictMode>
  );
};

export default App;
