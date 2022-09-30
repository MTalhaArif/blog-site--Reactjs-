

import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogsDetails from './BlogsDetails';
import NotFound from './NotFound';

function App() {

  //const title = "Welcome to the new Blog";
  // const likes = 50;
  // const link = "http://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      
      <div className="content">
      {/* <h1>{ title} </h1> */}
      {/* <Home/> */}
      {/* <p> Liked {likes} times </p>
      <p> {Math.random() *10}  </p>
      <a href={link} > Google Link </a> */}
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/create">
           <Create/>
        </Route>
        <Route path="/blogs/:id">
           <BlogsDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
