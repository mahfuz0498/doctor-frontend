import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Doctors from "./Doctors";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/doctors">
            <Header />
            {/* <Doctors /> */}
            {/* <Footer /> */}
          </Route>
          <Route path="/departments">
            <Header />
            {/* <Departments /> */}
            {/* <Footer /> */}
          </Route>
          <Route path="/contact">
            <Header />
            {/* <About /> */}
            {/* <Footer /> */}
          </Route>
          <Route path="/">
            <Header />
            <Slider />
            <Doctors />
            {/* <Footer /> */}
          </Route>
        </Switch>
        {/*parts 1. department doctors ficialities */}
        {/* contact */}
        {/* footer */}
      </div>
    </Router>
  );
}

export default App;
