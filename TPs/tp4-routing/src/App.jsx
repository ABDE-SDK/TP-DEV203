import { Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Posts from "./components/Posts.jsx";
import Users from "./components/Users.jsx";


function App() {

  return (
    <div className="p-5">
      <nav className="navbar">
        <Link to="/" >Home</Link>
        <Link to="/posts" >Posts</Link>
        <Link to="/users" >Users</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id?' element={<Posts />} />
        <Route path='/users/:id?' element={<Users />} />
      </Routes>

    </div>
  )
}

export default App
