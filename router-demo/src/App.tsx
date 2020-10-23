import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, About, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Router Demo</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/3">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/about/:id" component={About} />
          <Route
            path="/contact"
            render={(routeProps) => (
              <Contact
                message="Welcome! We would love to hear from you!"
                {...routeProps}
              />
            )}
          />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </main>
      <footer>
        <small>&copy; {new Date().getFullYear()}, Router Demo</small>
      </footer>
    </div>
  );
}

export default App;
