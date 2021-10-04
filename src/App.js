import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import ContactUs from './Component/ContactUs/ContactUs';
import Services from './Component/Services/Services';
import NotFound from  './Component/NotFound/NotFound';



function App() {
  return (
    <div>
    <Router>
    <Header></Header>
    <Switch>
    <Route exact path="/">
     <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/about">
      <About></About>
    </Route>
    <Route path="/contactUs">
      <ContactUs></ContactUs>
    </Route>
    <Route path="/services">
      <Services></Services>
    </Route>
    <Route path="*">
      <NotFound></NotFound>
    </Route>
    </Switch>
    <Footer></Footer>
    </Router>   
    </div>
  );
}

export default App;
