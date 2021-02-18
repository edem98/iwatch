import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Home from './screens/Home'
import Collection from './screens/Collection'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [category, setCategory] = useState("Films") 

  const options = [
    'Films', 'Animés', 'Séries',
  ];

  const setCurrentCategory = (value) => {
    setCategory(value)
  }

  return (
    <Router>
      <Header options={options} selectCategory={setCurrentCategory} />
      <Switch>
          <Route path="/downloads" exact> 
            <Collection />
          </Route>
          <Route path="/">
            <Home category={category} />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
