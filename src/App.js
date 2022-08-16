import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './Header';
import {Top} from './Top';
import {DailyTop} from './daily/pages/DailyTop';
import {CategoryView} from './daily/pages/CategoryView';
import {DailyDetail} from './daily/pages/DailyDetail';
import {Profile} from './profile/Profile';


export const App = () => {
  return(
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Top} />
            <Route exact path='/daily' component={DailyTop} />
            <Route exact path='/daily/:id' component={DailyDetail} />
            <Route exact path='/daily/category/:cat' component={CategoryView} />
            <Route exact path='/profile' compoent={Profile} />
            <Route rebder={() => <h4>not found...</h4>} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}






















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
