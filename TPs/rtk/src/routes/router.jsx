import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PostsApp from "../features/posts/postsApp.jsx"
import CommentsApp from "../features/comments/commentsApp.jsx"
import Layout from '../compenent/Layout.jsx';

function Router() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<PostsApp />} />
                <Route path='/comments' element={<CommentsApp />} />
            </Route>


        </Routes>
    )
}
export default Router;