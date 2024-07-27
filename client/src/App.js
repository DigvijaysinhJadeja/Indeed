import Home from "./pages/Home"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from "./pages/CreatePost"
import { routhPath } from "./routes/route";
import AllPost from "./pages/AllPost"

function App() {
  return (
    <Router>
      <Routes>
        <Route path = {routhPath.home} element = {<Home/>} />
        <Route path = {routhPath.create} element = {<CreatePost/>}/>
        <Route path = {routhPath.posts} element = {<AllPost/>}/>
      </Routes>
    </Router>
  );
}

export default App;
