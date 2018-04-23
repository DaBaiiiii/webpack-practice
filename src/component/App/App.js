import React from 'react';
import Footer from '../Footer/Footer';
import AddTodo from '../../container/AddTodo/AddTodo';
import VisibleTodoList from '../../container/VisibleTodoList/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export default App