import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Counter from "./counter/counter";
import InputList from "./counter/InputList";
import Page from "./MyPage/Page";
import CreateUser from "./MyPage/CreateUser";
import EditUser from "./MyPage/EditUser";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        
          <Route path='/counter' component={Counter} /> 
          <Route path='/inputlist' component={InputList} />          
          <Route path='/page' component={Page} />
          <Route path='/create' component={CreateUser} />
          <Route path='/edituser/:id' component={EditUser} />

        </Switch>
      </BrowserRouter>
    </div>
  )


}

export default App;
