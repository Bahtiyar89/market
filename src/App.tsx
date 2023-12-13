import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "src/layout";
import PrivateRouter from "./routers/PrivateRouter";
import { Home, Product, Profile } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route element={<PrivateRouter />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
