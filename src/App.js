import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Card from "./components/Card";
import AboutUs from "./components/About-us";

import { lightTheme, darkTheme } from "./themes/theme";

export default function App() {
  const [themeObject, setThemeObject] = React.useState(lightTheme);

  function DarkMode() {
    setThemeObject(themeObject.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <Router>
      <div className={`${themeObject.bgColor} ${themeObject.textColor}`}>
        <Header
          themeObject={themeObject}
          themeObject={themeObject}
          DarkMode={DarkMode}
        />
        <Switch>
          <Route path="/Home">
            <Home themeObject={themeObject} />
          </Route>
          <Route path="/Card">
            <Card themeObject={themeObject} />
          </Route>
          <Route path="/About-us">
            <AboutUs themeObject={themeObject} />
          </Route>
        </Switch>
        <Footer themeObject={themeObject} />
      </div>
    </Router>
  );
}
