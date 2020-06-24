import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import VisibleTodo from './components/VisibleTodo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <AddTodo />
      <VisibleTodo />
      <Footer />
    </div>
  );
}

export default App;
