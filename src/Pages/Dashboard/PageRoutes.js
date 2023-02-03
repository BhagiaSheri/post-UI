import {Navigate, Route, Routes} from "react-router";
import Posts from "../../containers/Posts/Posts";
import PostDetails from "../../components/PostDetails/PostDetails";
import NewPost from "../../components/NewPost/NewPost";
import Comments from "../../containers/Comments/Comments";

function PageRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/posts"}/>}></Route>
            <Route path="posts" element={<Posts/>}></Route>
            <Route path="posts/:id" element={<PostDetails/>}>
                <Route path="comments" element={<Comments/>}/>
            </Route>
            <Route path="new-post" element={<NewPost/>}/>
        </Routes>
    )
}

export default PageRoutes
