import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import AddBook from './Components/AddBook/AddBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Component} from 'react';
class App extends Component {
  render(){
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<><Header /><Register /></>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<><Header /><About /></>} />
        <Route path='/dashboard' element={<><Header /><Dashboard /></>} />
        <Route path='/AddBook' element={<><Header /><AddBook /></>} />
      </Routes>
    </BrowserRouter>
  </div>)
  }
}

export default App;
