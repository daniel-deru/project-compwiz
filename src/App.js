import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

//components
import Header from "./components/jsx/Header"
import Background from "./components/jsx/Background"

import About from "./components/jsx/About"
import Home from "./components/jsx/Home"
import Products from "./components/jsx/Products"
import Reviews from "./components/jsx/Reviews"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Background/>
        <Header/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/about" component={About}/>
          <Route  exact path="/products" component={Products}/>
          <Route  exact path="/reviews" component={Reviews}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
