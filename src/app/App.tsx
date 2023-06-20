import React from 'react';
import './App.scss';
import Routing from "../routing/Routing";
import Header from "../components/header/Header";
import Content from "../components/content/Content";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Content>
      <Routing />
    </Content>
  </BrowserRouter>
)

export default App;
