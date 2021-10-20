import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import DetailFish from "./components/DetailFish/DetailFish";
import Fishes from "./components/Fishes/Fishes";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/fishes">
            <Fishes></Fishes>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
           <Route path="/fish/:fishId">
              <DetailFish></DetailFish>
           </Route>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
