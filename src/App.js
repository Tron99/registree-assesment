import "./App.css";

import * as styledComponents from "./styledComponents";

import { Layout, Menu } from "antd";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const TestDiv = () => <div></div>;

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Layout style={{ height: "100%" }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <styledComponents.NavItems key="1" icon={<TestDiv />} style>
                <Link to="/">Option 1</Link>{" "}
              </styledComponents.NavItems>
              <styledComponents.NavItems key="2" icon={<TestDiv />} style>
                <Link to="/">Option 2</Link>{" "}
              </styledComponents.NavItems>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                content
              </div>
            </Content>
            <Footer style={{ textAlign: "center", background: "f2f2f2" }}>
              Created by Thulani
            </Footer>
          </Layout>
        </Layout>
      </div>{" "}
    </Router>
  );
}

export default App;
