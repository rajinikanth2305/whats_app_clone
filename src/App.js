import "./App.css";
import Login from "./Login";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user)
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/*sidebar */}

          <Router>
            <Switch>
              <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
              <Route path="/">
                <Sidebar />
              </Route>
            </Switch>
          </Router>

          {/*chat */}
        </div>
      )}
    </div>
  );
}

export default App;
