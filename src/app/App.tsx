import React from 'react';
import Layout from "../components/layout";
import HomePage from "../pages/homePage/HomePage";

function App() {
  return (
    <Layout.Root>
      <Layout.Header />
      <Layout.Navbar />
      <Layout.Content>
        <HomePage />
      </Layout.Content>
    </Layout.Root>
  );
}

export default App;
