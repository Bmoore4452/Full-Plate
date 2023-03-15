import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { UserProvider } from './utils/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SingleRecipe from './pages/SingleRecipe';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import AddRecipe from './pages/AddRecipe';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/recipe/:recipeId'
              element={<SingleRecipe />}
            />
            <Route 
              path='/user/:userId'
              element={<AddRecipe />}
            />
            <Route 
              path='/signup'
              element={<SignUp />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
