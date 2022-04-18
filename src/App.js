import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <DashboardContextProvider>
      <Router>
          <Sidebar />  
          <Switch>
            <Route path="/" exact component={DashboardFinance} />
            <Route path="/dashboardEmployees" exact component={DashboardEmployees} />
          </Switch>
      </Router>
    </DashboardContextProvider>
  )
}
