import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/projects-page/projects';
import Projectdetail from './Pages/projectdetail';
import MyProfile from './Pages/profile/myProfile';
import Login from './Pages/login/login';
import Signup from './Pages/login/signup';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Navbar/>
        </header> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/projects.js">
              <Projects/>
            </Route>
            <Route exact path="/myprofile.js">
              <MyProfile />
            </Route>
            <Route exact path="/projectdetail.js">
              <Projectdetail/>
            </Route>
            <Route exact path="/login.js">
              <Login/>
            </Route>
            <Route exact path="/signup.js">
              <Signup/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
