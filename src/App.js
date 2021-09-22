import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Profile from "./Profile"
import Navbar from "./Navbar"
import Contact from "./Contact"

const App = () => {
  return (
    <Router>
    <div className="app">
        <Navbar/>
        <Switch>        
        <Route exact path="/">
          <Profile/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>        
        </Switch>
    </div>
    </Router>
  );
}

export default App;
