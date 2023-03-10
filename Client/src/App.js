import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserProvider } from './utils/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
        <Header />
        <div className="container">
          <Routes>
          
          </Routes>
        </div>
        </Router>
        <Footer />
      </UserProvider>
      
    </ApolloProvider>
  );
}

export default App;
