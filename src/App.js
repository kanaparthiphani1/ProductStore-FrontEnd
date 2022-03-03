import HeaderComp from "./components/Header";
import Sidebar from "./components/Sidebar";

import {Switch, Route} from 'react-router-dom'
import { Button, Layout } from "antd";
import './App.css'
import Products from "./components/Products";

function App() {
  return (
    <Layout className="outercont">
        <Sidebar />
      <Layout style={{maxWidth:'100vw'}}>
        <HeaderComp />
        <Layout>
          <Switch>
            <Route exact path="/" component={Products}/>
          </Switch>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
