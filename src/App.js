import { BrowserRouter, Link, Routes, Route, Routers } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/"> Home </Link>
        <br />
        <Link to="/page1"> Page1 </Link>
        <br />
        <Link to="/page2"> Page2 </Link>
      </div>
      {/* v6からはSwitchではなくRoutes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>

      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch> */}
    </BrowserRouter>
  );
}
