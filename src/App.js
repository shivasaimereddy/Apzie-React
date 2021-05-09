import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import ShippingScreen from "./components/screens/ShippingScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen";
import OrderScreen from "./components/screens/OrderScreen";
import OrderListScreen from "./components/screens/OrderListScreen";
import UserListScreen from "./components/screens/UserListScreen";
import EditUserScreen from "./components/screens/EditUserScreen";
import ProductListScreen from "./components/screens/ProductListScreen";
import EditProductScreen from "./components/screens/EditProductScreen";




function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/Profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/orders" component={OrderListScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/users" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={EditUserScreen} />
          <Route path="/admin/products" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={EditProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
