import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
