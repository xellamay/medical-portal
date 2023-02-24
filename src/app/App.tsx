import React from 'react';
import Layout from "../components/layout";
import Routing from "./routing/Routing";

const App = () => (
  <Layout.Root>
    <Layout.Header/>
    <Layout.Navbar/>
    <Layout.Content>
      <Routing/>
    </Layout.Content>
  </Layout.Root>
);

export default App;
