import "./App.css";
import Dash from "./components/screens/dash/Dash";
import styled from "styled-components";
import Summary from "./components/screens/summary/Summary";
import Product from "./components/screens/products/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotSelling from "./components/screens/hotselling/HotSelling";
import Settings from "./components/screens/settings/Settings";
import Items from "./components/screens/items/Items";
import Payments from "./components/screens/payment/Payments";
import Order from "./components/screens/order/Order";
import PageNotFound from "./components/screens/PageNotFound";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/-Dashboard"
            element={
              <Container>
                <Dash />
                <Summary />
                <Product />
              </Container>
            }
          />
          <Route
            path="/summary"
            element={
              <Container>
                <Dash />
                <Summary />
                <Product />
              </Container>
            }
          />
          <Route path="/products" element={<Items />} />
          <Route path="/hotselling" element={<HotSelling />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
const Container = styled.section`
  display: flex;
`;
export default App;
