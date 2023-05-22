import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingScreen from './screens/LandingScreen'
import LearnScreen from './screens/LearnScreen'
import Blog01 from './components/blog01'
import Blog02 from './components/blog02'
import Blog03 from './components/blog03'

function App() {
  return (
    <Router>
      <Header />
      <main className ="py-3">
        <Container>
          <Routes>
            <Route path='/' exact element = { <LandingScreen /> }/>
            <Route path='/Home' exact element={<HomeScreen />} />
            <Route path='/Product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path="cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            {/* <Route path='/order/:id' element={<OrderScreen />} /> */}
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={ <OrderScreen/> }/>
            <Route path="/learn" element={<LearnScreen />} />
            <Route path ="/login/shipping" element = {<ShippingScreen/>}/>


            <Route path="/learn/1" element={<Blog01/>} />
            <Route path="/learn/2" element={<Blog02/>} />
            <Route path="/learn/3" element={<Blog03/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
