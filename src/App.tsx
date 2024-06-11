import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./layout/layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
