import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage/ListPage' 
import DetailPage from './pages/DetailPage/DetailPage'
import FavoritePage from './pages/FavoritePage/FavoritePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/favorite'>
          <FavoritePage/>
        </Route>
        <Route path='/detail/:id'>
          <DetailPage/>
        </Route>
        <Route path='/'>
          <ListPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
