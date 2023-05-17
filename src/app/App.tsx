import React from 'react';
import './App.scss';
import Routing from "../routing/Routing";
import Root from "../components/layout/root/Root";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/layout/content/Content";

function App() {
  return (
    <Root>
      <Header />
      <Navbar />
      <Content>
        <Routing />
      </Content>
    </Root>
  );
}

export default App;
